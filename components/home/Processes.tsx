import { ProcessProps } from '@/types';
import { Process } from './Process';

export const Processes = () => {
  const items: ProcessProps[] = [
    {
      number: '01',
      image: '/assets/images/Process01.png',
      title: 'you ask',
    },
    {
      number: '02',
      image: '/assets/images/Process02.png',
      title: 'we proceed',
    },
    {
      number: '03',
      image: '/assets/images/Process03.png',
      title: 'negotiate',
    },
    {
      number: '04',
      image: '/assets/images/Process04.png',
      title: 'you get',
    },
  ];

  return (
    <div className='bg-gradient'>
      <div className='container px-5 py-16 text-center'>
        <p className='text-white text-xl font-bold mb-8'>How to Start</p>
        <h3 className='text-white text-4xl font-black mb-6'>Easy Process</h3>
        <p className='w-[250px] mx-auto text-primary'>
          We specialize in helping you build a team of expert developers,
          testers, and leaders.
        </p>

        {items?.map((item, i) => (
          <Process key={i} data={item} />
        ))}
      </div>
    </div>
  );
};
