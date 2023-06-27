import { Hero } from '@/components/home/Hero';
import { Processes } from '@/components/home/Processes';
import { Solutions } from '@/components/home/Solutions';
import { Specialized } from '@/components/home/Specialized';
import { Technologies } from '@/components/home/Technologies';
import { FC } from 'react';

const getData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/home`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

const Home: FC = async () => {
  const { expertise, hero, processes, solutions, specialized,technologies } =
    await getData();

  return (
    <main>
      <Hero data={hero} />
      <Solutions data={solutions} />
      <Processes data={processes} />
      <Solutions data={expertise} center={true} />
      <Specialized data={specialized} />
      <Technologies data={technologies} />
    </main>
  );
};

export default Home;
