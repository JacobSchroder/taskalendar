'use client';

import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import localFont from 'next/font/local';
import { useState } from 'react';
import { themeContext } from './theme-context';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export default function RootLayoutInner({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <themeContext.Provider value={theme}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased ${theme}`}>
        <nav className='flex justify-between items-center h-12 px-4 bg-accent border-b fixed top-0 left-0 right-0'>
          <div>Taskalendar</div>
          <Button aria-label='Theme' variant='ghost' size='icon' onClick={handleThemeChange}>
            {theme === 'dark' ? <Sun className='h-4 w-4' /> : <Moon className='h-4 w-4' />}
          </Button>
        </nav>
        {children}
      </body>
    </themeContext.Provider>
  );
}
