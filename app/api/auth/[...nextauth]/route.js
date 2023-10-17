import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
// import { connectToDB } from 'utils/database'
// import User from 'models/user'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  callbacks: {
    async session({ session }) {
      const sessionUser = await prisma.user.findUnique({
        where: {
          email: session.user.email
        }
      })

      session.user.id = sessionUser.id.toString()

      return session
    },
    async signIn({ profile }) {
      try {
        const userExists = await prisma.user.findUnique({
          where: {
            email: profile.email
          }
        })


        if (!userExists) {
          await prisma.user.create({
            data: {
              email: profile.email,
              username: profile.name.replace(" ", "").toLowerCase(),
              image: profile.picture
            }
          })
        }
        return true
      } catch (error) {
        console.error(`ERROR: ${error}`)
        return false
      }
    }
  },
})


export { handler as GET, handler as POST }