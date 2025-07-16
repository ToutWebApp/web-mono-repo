import NextAuth from "next-auth";
import { authConfig } from "@repo/auth/src/next-auth.config";

const handler = NextAuth(authConfig);

export { handler as GET, handler as POST };
