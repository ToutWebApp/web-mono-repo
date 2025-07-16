// packages/auth/src/next-auth.config.ts
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";
import { axiosInstance } from "../../api-client/src/axios";
import { AuthResponse } from "./types";

import "./types/next-auth";

async function refreshAccessToken(token: JWT): Promise<JWT> {
  try {
    const response = await axiosInstance.post<AuthResponse>('/auth/refresh', {
      refreshToken: token.refreshToken
    });

    if (!response.data) {
      throw new Error("Failed to refresh token");
    }
    
    const data = response.data;
    return {
      ...token,
      token: data.token,
      refreshToken: data.refreshToken,
      tokenExpires: data.tokenExpires,
      expires: data.tokenExpires * 1000, // Convert to milliseconds
      error: undefined,
    };
  } catch (error) {
    console.error("❌ RefreshAccessTokenError", error);
    return {
      ...token,
      error: "RefreshAccessTokenError" as const,
    };
  }
}

export const authConfig: NextAuthOptions = {
  debug: process.env.NODE_ENV === "development",
  session: { strategy: "jwt" },
  pages: { signIn: "/login" },
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "EmailPassword",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          const response = await axiosInstance.post<AuthResponse>(
            `/auth/email/login`,
            {
              email: credentials.email,
              password: credentials.password,
            }
          );
          console.log("response", response);
          
          
          const { token, refreshToken, tokenExpires, user } = response.data;
          
          if (!user || !token || !refreshToken) {
            return null;
          }

          return {
            id: user.id,
            name: `${user.firstName} ${user.lastName}`,
            email: user.email,
            role: user.role.name,
            token,
            refreshToken,
            tokenExpires,
          };
        } catch (error) {
          console.error("Authorization error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }): Promise<JWT> {
      if (user) {
        return {
          ...token,
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          token: user.token,
          refreshToken: user.refreshToken,
          tokenExpires: user.tokenExpires,
          expires: user.tokenExpires * 1000,
        };
      }

      if (token.expires && Date.now() < token.expires) {
        return token;
      }

      return refreshAccessToken(token);
    },

    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id;
        session.user.name = token.name || "";
        session.user.email = token.email || "";
        session.user.role = token.role;
        session.user.token = token.token;
        session.user.refreshToken = token.refreshToken;
        session.user.expires = token.expires || 0;
        session.error = token.error;
      }
      
      return session;
    },
  },
  secret: process.env.AUTH_SECRET,
};

export default NextAuth(authConfig);