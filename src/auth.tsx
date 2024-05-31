import NextAuth from "next-auth";
import AzureADProvider from 'next-auth/providers/microsoft-entra-id';

export const { auth, handlers, signIn, signOut } = NextAuth({
    providers: [AzureADProvider({
        clientId: process.env.AZURE_AD_CLIENT_ID!,
        clientSecret: process.env.AZURE_AD_CLIENT_SECRET!,
        tenantId: process.env.AZURE_AD_TENANT_ID!
    })],
    callbacks: {
        async jwt({ token, account }) {
          // IMPORTANT: Persist the access_token to the token right after sign in
          if (account) {
            token.idToken = account.id_token;
          }
          return token;
        },
      },
})
