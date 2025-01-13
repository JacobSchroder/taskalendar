'use client';

import { signIn } from '@/auth/helpers';
import { Button } from '@/components/ui/button';

export function SignIn({
  provider,
  children,
  ...props
}: { provider?: string; children?: React.ReactNode } & React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      action={async () => {
        await signIn(provider, { redirectTo: '/' });
      }}
    >
      <Button type='submit' {...props}>
        {children}
      </Button>
    </form>
  );
}
