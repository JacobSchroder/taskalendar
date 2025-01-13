'use client';
import { signOut } from '@/auth/helpers';
import { Button } from '@/components/ui/button';
import { useSession } from 'next-auth/react';

export function SignOut({
  children,
  ...props
}: React.ComponentPropsWithRef<typeof Button> & { children?: React.ReactNode }) {
  const session = useSession();

  if (!session?.data?.user) return null;

  return (
    <form
      action={async () => {
        await signOut();
      }}
      className='w-full'
    >
      <Button type='submit' variant='ghost' className='w-full p-0' {...props}>
        {children}
      </Button>
    </form>
  );
}
