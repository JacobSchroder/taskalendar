'use client';

import { Moon, Sun } from 'lucide-react';
import { SignOut } from './sign-out';
import { Button } from './ui/button';
import UserAvatar from './user-avatar';

export default function TopNav({
  theme,
  handleThemeChange,
}: {
  theme: 'light' | 'dark';
  handleThemeChange: () => void;
}) {
  return (
    <nav className='flex justify-between items-center h-12 px-4 bg-accent border-b fixed top-0 left-0 right-0'>
      <div>Taskalendar</div>
      <div className='flex items-center gap-2'>
        <UserAvatar />
        <SignOut>Sign Out</SignOut>
        <Button aria-label='Theme' variant='ghost' size='icon' onClick={handleThemeChange}>
          {theme === 'dark' ? <Sun className='h-4 w-4' /> : <Moon className='h-4 w-4' />}
        </Button>{' '}
      </div>
    </nav>
  );
}
