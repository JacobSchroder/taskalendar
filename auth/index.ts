import { env } from '@/env';
import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';

export const BASE_PATH = '/api/v1/auth';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub, Google],
  basePath: BASE_PATH,
  secret: env.AUTH_SECRET,
});
