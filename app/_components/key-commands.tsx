'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function KeyCommands() {
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      const url = new URL(window.location.href);
      // If no element is focused it is safe to trigger the key command.
      // If we are on the home page, we can trigger the key command without checking for focus, since there are no input fields.
      if (e.target !== document.body && url.pathname !== '/') return;
      if (e.key === '+' && url.pathname !== '/tasks/new') {
        e.preventDefault();
        router.push('/tasks/new');
      }
      if (e.key === '1' && url.pathname === '/') {
        e.preventDefault();
        router.push('?view=day');
      }
      if (e.key === '2' && url.pathname === '/') {
        e.preventDefault();
        router.push('?view=week');
      }
      if (e.key === '3' && url.pathname === '/') {
        e.preventDefault();
        router.push('?view=month');
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [router]);
  return <></>;
}
