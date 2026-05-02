import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header/Header';
import { Footer } from '@/components/layout/Footer/Footer';
import { TemeProvider } from './provider/TemeProvider';
import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core';

export const metadata: Metadata = {
  title: 'Crypto',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body>
        <TemeProvider>
          <Header />
          {children}
          <Footer />
        </TemeProvider>
      </body>
    </html>
  );
}
