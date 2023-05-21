import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      async authorize(credentials, req) {
        try {
          const res = await fetch("http://localhost:5000/api/v1/user/login", {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" },
          });

          const user = await res.json();

          if (res.ok && user.token) {
            return user;
          }

          return null;
        } catch (err) {
          throw new Error(err);
        }
      },
    }),
  ],
  secret: "d9235ede-2777-48d0-b762-0466f56eb509",
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.token = user.token;
        token.user = user.data;
      }
      return token;
    },
    session: async ({ session, token }) => {
      session.user = token.user;
      session.token = token.token;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
