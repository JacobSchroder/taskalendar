'use server';
import { signIn as naSignIn, signOut as naSignOut } from '.';

export async function signIn(...args: Parameters<typeof naSignIn>) {
  await naSignIn(...args);
}

export async function signOut(...args: Parameters<typeof naSignOut>) {
  await naSignOut(...args);
}
