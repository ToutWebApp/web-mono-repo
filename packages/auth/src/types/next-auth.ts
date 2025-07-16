import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: number | string;
      role: string;
      token: string;
      refreshToken: string;
      expires: number;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
    error?: "RefreshAccessTokenError";
  }

  interface User {
    id: number | string;
    name: string;
    email: string;
    role: string;
    token: string;
    refreshToken: string;
    tokenExpires: number;
    image?: string | null;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: number | string;
    role: string;
    token: string;
    refreshToken: string;
    tokenExpires: number;
    expires?: number;
    error?: "RefreshAccessTokenError";
    name?: string | null;
    email?: string | null;
    sub?: string;
    iat?: number;
    exp?: number;
    jti?: string;
  }
}
