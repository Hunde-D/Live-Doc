import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/services/providers/theme-provider';
import './globals.css';
//editor themes
import './dark-theme.css';
// import './light-theme.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Live Doc',
  description: 'Your go-to for collaborative editing and sharing of documents',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
