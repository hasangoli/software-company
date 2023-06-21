import { Header } from '@/components/layout/Header';
import './globals.scss';

import { header } from '@/const';
import localFont from 'next/font/local';

const myFont = localFont({
  src: './Poppins-Regular.ttf',
  display: 'swap',
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
