import env from '@/utils/env';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';



const authOptions = {
    providers: [
        // EmailProvider({
        //     server: env.SMTP_SERVER,
        //     from: 'NextAuth.js <no-reply@example.com>'
        // }),
        GoogleProvider({
            clientId: env.GOOGLE_ID,
            clientSecret: env.GOOGLE_SECRET,
        }),
    ],
    callbacks: {
        async jwt({ token, account, profile }: any) {
            if (account) {
                token.accessToken = account.access_token
                token.provider = account.provider
                token.id = profile.id
            }
            return token
        },
        session({ session, token }: any) {
            session.user.id = token.sub;
            session.provider = token.provider == 'google' ? 'GOOGLE' : 'GITHUB';
            return session;
        },
        async signIn({ user, account, profile }: any) {
            // Check if the email is in the allowed list
            if (env.PERMITTED_EMAILS.split(',').includes(user.email)) {
                return true; // Allow sign in
            } else {
                return false; // Reject sign in
            }
        },
    }
};

async function auth(req: any, res: any) {
    return await NextAuth(req, res, authOptions)
}

export { auth as GET, auth as POST };

