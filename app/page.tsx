import { Hero } from '@/components/home/Hero';
import { Processes } from '@/components/home/Processes';
import { Solutions } from '@/components/home/Solutions';

export default function Home() {
  return (
    <main>
      <Hero />
      <Solutions />
      <Processes />
    </main>
  );
}
