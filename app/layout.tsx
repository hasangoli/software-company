import { Header } from '@/components/layout/Header';
import './globals.scss';

import { header } from '@/const';
import localFont from 'next/font/local';

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

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <html lang='en' className={myFont.className}>
      <body>
        <Header data={header} />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
