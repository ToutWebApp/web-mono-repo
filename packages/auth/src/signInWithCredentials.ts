// packages/auth/src/signInWithCredentials.ts
import { signIn, SignInResponse } from 'next-auth/react';

export async function signInWithCredentials(
  email: string, 
  password: string
): Promise<SignInResponse | undefined> {
  try {
    // `redirect: false` so we can handle errors in code
    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });
    return result;
  } catch (error) {
    console.error('Sign in error:', error);
    return undefined;
  }
}