import type { Metadata } from 'next';
import './globals.css';
import RootLayoutInner from './layout-inner';

export const metadata: Metadata = {
  title: 'Taskalendar',
  description: 'Take back control of your time',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <RootLayoutInner>{children}</RootLayoutInner>
    </html>
  );
}
