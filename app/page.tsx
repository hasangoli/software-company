import { Hero } from '@/components/home/Hero';
import { Processes } from '@/components/home/Processes';
import { Solutions } from '@/components/home/Solutions';
import { Specialized } from '@/components/home/Specialized';
import { expertise, hero, processes, solutions, specialized } from '../const';

const Home = (): JSX.Element => {
  return (
    <main>
      <Hero data={hero} />
      <Solutions data={solutions} />
      <Processes data={processes} />
      <Solutions data={expertise} center={true} />
      <Specialized data={specialized} />
    </main>
  );
};

export default Home;
