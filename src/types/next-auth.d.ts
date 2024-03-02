import NextAuth, { DefaultSesstion } from "next-auth/next";

declare module "next-auth" {
  interface Session {
    user: {
      username: string;
    } & DefaultSesstion["user"];
  }
}
