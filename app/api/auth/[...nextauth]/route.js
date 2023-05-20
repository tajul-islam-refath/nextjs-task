import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      async authorize(credentials, req) {
        const res = await fetch("http://localhost:5000/api/v1/user/login", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });

        const data = await res.json();
        // console.log(data.token);
        return {
          token: data.token,
        };
      },
    }),
  ],
  secret: "d9235ede-2777-48d0-b762-0466f56eb509",
});

export { handler as GET, handler as POST };
