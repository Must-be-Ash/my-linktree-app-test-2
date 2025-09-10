import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ash | Links',
  description: 'Minimal link page for Ash',
  icons: [{ rel: 'icon', url: '/favicon.ico' }]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
