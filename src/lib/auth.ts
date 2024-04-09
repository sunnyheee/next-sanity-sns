import { addUser } from "@/service/user";
import NextAuth, { Session, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import type { NextAuthOptions } from "next-auth";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_ID || "",
      clientSecret: process.env.GOOGLE_OAUTH_SECRET || "",
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async signIn({ user: { id, name, image, email } }: { user: User }) {
      if (!email) {
        return false;
      }
      addUser({
        id,
        name: name || "",
        image,
        email,
        username: email.split("@")[0],
      });
      return true;
    },
    async session({ session }: { session: Session }) {
      const user = session?.user;
      if (user) {
        session.user = {
          ...user,
          username: user.email?.split("@")[0] || "",
        };
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
  },
} satisfies NextAuthOptions;

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
