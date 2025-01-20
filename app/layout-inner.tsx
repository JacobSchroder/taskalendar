'use client';

import TopNav from '@/components/top-nav';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
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

const queryClient = new QueryClient();

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
      <QueryClientProvider client={queryClient}>
        <body
          className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[auto_1fr] antialiased ${theme}`}
        >
          <TopNav theme={theme} handleThemeChange={handleThemeChange} />
          {children}
        </body>
      </QueryClientProvider>
    </themeContext.Provider>
  );
}
