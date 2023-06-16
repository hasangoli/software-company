import './globals.scss';

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
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
