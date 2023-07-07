import { Header } from '@/components/layout/Header';
import './globals.scss';

import { Footer } from '@/components/layout/Footer';
import { MUIProvider } from '@/components/layout/MUIProvider';
import { FC, PropsWithChildren } from 'react';

const getData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/global`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

export const metadata = {
  title: 'Courtney Lanka',
  description: 'Building Dev Team, Quickly and Affordably',
};

const RootLayout: FC = async ({ children }: PropsWithChildren) => {
  const { header, footer } = await getData();

  return (
    <html lang='en' className='font-poppins'>
      <MUIProvider>
        <body>
          <Header data={header} />
          {/* {children} */}
          <Footer data={footer} />
        </body>
      </MUIProvider>
    </html>
  );
};

export default RootLayout;
