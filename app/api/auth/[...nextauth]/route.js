import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "jsmith@gmail.com",
        },
        password: {
          label: "password",
          type: "password",
          placeholder: "********",
        },
      },
      async authorize(credentials, req) {
        console.log(credentials);
        const res = await fetch("http://localhost:5000/api/v1/user/login", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();

        console.log(data);

        if (res.ok && data) {
          return {
            token: data.token,
          };
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
});

export { handler as GET, handler as POST };
// callbacks: {
//     jwt: async ({ token, user }) => {
//       user && (token.user = user);
//       return token;
//     },
//     session: async ({ session, token }) => {
//       session.user = token.user;
//       return session;
//     },
//   },
//   pages: {
//     signIn: "/",
//   },
