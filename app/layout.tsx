import { Header } from '@/components/layout/Header';
import './globals.scss';

import { MUIProvider } from '@/components/layout/MUIProvider';
import localFont from 'next/font/local';
import { FC, PropsWithChildren } from 'react';

const getData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/global`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

const myFont = localFont({
  src: [
    {
      path: './Poppins-ExtraLight.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './Poppins-Light.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './Poppins-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Poppins-Bold.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Poppins-ExtraBold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Poppins-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
});

export const metadata = {
  title: 'Courtney Lanka',
  description: 'Building Dev Team, Quickly and Affordably',
};

const RootLayout: FC = async ({ children }: PropsWithChildren) => {
  const { header } = await getData();

  return (
    <html lang='en' className={myFont.className}>
      <MUIProvider>
        <body>
          <Header data={header} />
          {children}
        </body>
      </MUIProvider>
    </html>
  );
};

export default RootLayout;
