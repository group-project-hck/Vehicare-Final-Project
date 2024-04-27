import { Tokenjwt } from "@/databases/helpers/jwt";
import UserModel from "@/databases/models/users";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { cookies } from "next/headers";

const authOption: NextAuthOptions = {
    session: {
        strategy: 'jwt'
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        })
    ],
    secret: process.env.SECRET,
    callbacks: {
        async signIn({ account, profile }) {
            const { picture }: any = profile

            if (account?.provider === 'google') {
                const data = {
                    name: profile?.name,
                    username: (profile?.name?.split(" ")[1]) ? profile?.name?.split(" ")[1] : profile?.name,
                    email: profile?.email,
                    password: Math.random().toString(),
                    role: 'member',
                    image: picture
                }
                const user = await UserModel.googleLogin(data)
                const token = Tokenjwt.genToken({
                    _id: user._id.toString(),
                    email: user.email,
                    username: user.username,
                    role: user.role
                });
                cookies().set("Authorization", `Bearer ${token}`);
            }
            return true
        }
    }
}

const handler = NextAuth(authOption)
export { handler as GET, handler as POST }