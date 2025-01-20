'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function KeyCommands() {
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      const url = new URL(window.location.href);
      if (e.key === '+' && e.target === document.body && url.pathname !== '/tasks/new') {
        e.preventDefault();
        router.push('/tasks/new');
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [router]);
  return <></>;
}
