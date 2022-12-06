import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import db from '../../../database'

export const authOptions = {
  secret: 'Secre22t',
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Email", type: "text", placeholder: ".." },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        try {
          const user = await db.User.findOne()
          //console.log('user to be authenticated is :', user)
          if (user) {
            console.log('user in auth ', user)
            return user
          } else {
            throw new Error('you need to register')
          }
        } catch (error) {
          console.log(error)
        }
       
      }
    })
  ],
}
export default NextAuth(authOptions)