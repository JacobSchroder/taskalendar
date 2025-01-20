import { auth, BASE_PATH } from '@/auth';
import type { Metadata } from 'next';
import { SessionProvider } from 'next-auth/react';
import './globals.css';
import RootLayoutInner from './layout-inner';

export const metadata: Metadata = {
  title: 'Taskalendar',
  description: 'Take back control of your time',
};

export default async function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <SessionProvider basePath={BASE_PATH} session={session}>
      <html lang='en'>
        <RootLayoutInner>
          {children}
          {modal}
        </RootLayoutInner>
      </html>
    </SessionProvider>
  );
}
