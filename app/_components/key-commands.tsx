'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function KeyCommands() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === '+' && e.target === document.body && pathname !== '/tasks/new') {
        e.preventDefault();
        router.push('/tasks/new');
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);
  return <></>;
}
