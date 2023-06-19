import { Header } from '@/components/layout/Header';
import './globals.scss';

import localFont from 'next/font/local';

const myFont = localFont({
  src: './Poppins-Regular.ttf',
  display: 'swap',
});

export const metadata = {
  title: 'Courtney Lanka',
  description: 'Building Dev Team, Quickly and Affordably',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={myFont.className}>
      <body>
        <Header />
        {children}
        <div className='h-[500px]'></div>
      </body>
    </html>
  );
}
