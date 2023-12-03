import NextAuth from "next-auth";
import Spotify from "@auth/core/providers/spotify";
import { SCOPES } from "@/constants/spotify";

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [
    Spotify({
      authorization: {
        params: {
          scope: SCOPES.join(" "),
        },
      },
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      if (session.user) session.user.id = token.id;
      session.accessToken = token.accessToken;
      return session;
    },
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id;
      }
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
  },
  session: { strategy: "jwt" },
});
