'use client';
import { signOut } from '@/auth/helpers';
import { Button } from '@/components/ui/button';

export function SignOut({
  children,
  ...props
}: React.ComponentPropsWithRef<typeof Button> & { children?: React.ReactNode }) {
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
