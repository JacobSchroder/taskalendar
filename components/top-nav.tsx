'use client';

import { Moon, Sun } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { Button } from './ui/button';
import UserDropdownMenu from './user-dropdown-menu';

export default function TopNav({
  theme,
  handleThemeChange,
}: {
  theme: 'light' | 'dark';
  handleThemeChange: () => void;
}) {
  const session = useSession();

  return (
    <nav className='flex justify-between items-center h-12 px-4 bg-accent border-b'>
      <div>Taskalendar</div>
      <div className='flex items-center gap-2'>
        <Button aria-label='Theme' variant='ghost' size='icon' onClick={handleThemeChange}>
          {theme === 'dark' ? <Sun className='h-4 w-4' /> : <Moon className='h-4 w-4' />}
        </Button>
        {!!session?.data?.user && <UserDropdownMenu />}
      </div>
    </nav>
  );
}
