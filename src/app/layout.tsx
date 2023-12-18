import '~/styles/globals.css';

import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import { type Metadata } from 'next';

import ThemeProvider from '~/components/ThemeProvider';

export const metadata: Metadata = {
  title: 'Nick Dutton',
  description: 'Fullstack Web Developer, Australia',
  icons: {
    icon: '/ico/favicon.ico',
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <body className='bg-topography bg-black'>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
