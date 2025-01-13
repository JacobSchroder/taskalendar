'use client';

import { cn } from '@/lib/utils';
import { useSession } from 'next-auth/react';

export default function UserAvatar({
  size = 48,
  className,
}: {
  size?: number;
  className?: string;
}) {
  const session = useSession();

  console.dir(session);

  if (!session?.data?.user) return null;

  return (
    <img
      height={size}
      width={size}
      className={cn('rounded-full border', className)}
      src={session.data.user.image ?? ''}
      alt='User Avatar'
    />
  );
}
