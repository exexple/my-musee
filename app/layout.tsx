import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Cormorant, DM_Mono } from 'next/font/google';
import './globals.css';
import { story } from '@/data/story';

const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

const cormorant = Cormorant({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const dmMono = DM_Mono({
  weight: ['300', '400'],
  subsets: ['latin'],
  style: ['normal'],
  variable: '--font-dm-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: story.siteTitle,
  description: story.siteDescription,
  openGraph: {
    title: story.siteTitle,
    description: story.siteDescription,
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: story.siteTitle,
    description: story.siteDescription,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#0a0908',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${cormorant.variable} ${dmMono.variable}`}>
      <head>
        <meta name="color-scheme" content="dark" />
      </head>
      <body>{children}</body>
    </html>
  );
}
