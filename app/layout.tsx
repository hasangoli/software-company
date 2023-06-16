import './globals.scss';

export const metadata = {
  title: 'BOARD',
  description: 'Let your mind explore new world',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='bg-primary'>{children}</body>
    </html>
  );
}
