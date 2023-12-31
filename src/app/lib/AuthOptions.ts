import { jwtHelpers } from "@/helpers/jwtHelpers";
import { getNewAccessToken } from "@/services/getNewAccessToken";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      id: "pro-tech-fixer",
      name: "Credentials",
      type: "credentials",
      credentials: {
        username: {
          label: "Email",
          type: "email",
          placeholder: "Enter Your Email",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          const res = await fetch(`${process.env.NEXT_SERVER_URL}/auth/login`, {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: {
              "Content-Type": "application/json",
            },
          });
          const { data } = await res.json();
          const verifyToken: any = jwtHelpers.verifyToken(
            data?.accessToken,
            process.env.JWT_SECRET!
          );
          if (res.ok && data) {
            return {
              ...data,
              ...verifyToken,
            };
          }
        } catch (error: any) {
          throw new Error(error.message);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return {
        ...token,
        ...user,
      };
    },
    async session({ session, token }: { session: any; token: any }) {
      const verifiedToken = jwtHelpers.verifyToken(
        token?.accessToken,
        process.env.JWT_SECRET!
      );
      if (!verifiedToken) {
        const { data } = await getNewAccessToken(token?.accessToken);
        token.accessToken = data?.accessToken;
      }
      return {
        ...session,
        ...token,
      };
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60,
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
    error: "/",
  },
};
