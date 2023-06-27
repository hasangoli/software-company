import { ProcessProps, ProcessesData } from '@/types';
import { Process } from './Process';

export const Processes = ({ data }: { data: ProcessesData }): JSX.Element => {
  return (
    <div className='bg-gradient'>
      <div className='container px-5 py-16 text-center'>
        <p className='text-white text-xl font-bold mb-8'>{data?.title}</p>
        <h3 className='text-white text-4xl font-black mb-6'>
          {data?.mainTitle}
        </h3>
        <p className='w-[250px] mx-auto text-primary'>{data?.description}</p>

        {data?.data?.map((item: ProcessProps, i: number) => (
          <Process key={i} data={item} />
        ))}
      </div>
    </div>
  );
};
