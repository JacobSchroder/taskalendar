import { SignIn } from '@/components/sign-in';
import Image from 'next/image';

export default function LoginPage() {
  return (
    <div className='flex items-center justify-center min-h-screen bg-background'>
      <div className='w-full max-w-md space-y-8 p-8 bg-card rounded-xl shadow-lg'>
        <div className='text-center'>
          <h2 className='mt-6 text-3xl font-bold text-foreground'>Sign in to your account</h2>
        </div>
        <div className='mt-8 space-y-6'>
          <div className='space-y-4'>
            <SignIn size='lg' variant='default' className='w-full' provider='github'>
              <Image
                src='/assets/icons/github.svg'
                className='invert dark:invert-0'
                alt='GitHub'
                width={20}
                height={20}
              />
              Sign in with GitHub
            </SignIn>
            <SignIn size='lg' variant='secondary' className='w-full' provider='google'>
              <Image
                src='/assets/icons/google.svg'
                alt='Google'
                className='dark:invert'
                width={20}
                height={20}
              />
              Sign in with Google
            </SignIn>
          </div>
        </div>
      </div>
    </div>
  );
}
