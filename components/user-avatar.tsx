'use client';

import { useSession } from 'next-auth/react';

export default function UserAvatar() {
  const session = useSession();

  console.dir(session);

  if (!session?.data?.user) return null;

  return (
    <div>
      <img
        height={48}
        width={48}
        className='rounded-full border'
        src={session.data.user.image ?? ''}
        alt='User Avatar'
      />
    </div>
  );
}
