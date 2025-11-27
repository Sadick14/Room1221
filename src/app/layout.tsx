import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import FloatingChatbot from '@/components/floating-chatbot';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'Room 1221 - Your Safe Space for SRH',
  description:
    'Confidential Sexual & Reproductive Health Support for Ghanaian Youth.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={cn(
          'font-inter antialiased',
          'min-h-screen bg-white dark:bg-[#121212]'
        )}
      >
        <main>{children}</main>
        <FloatingChatbot />
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
