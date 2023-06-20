import { SolutionProps } from '@/types';
import { ImageProvider } from '../global/ImageProvider';

export const Solution = ({ data }: { data: SolutionProps }) => {
  return (
    <div className='flex flex-col'>
      <ImageProvider
        src={data?.image}
        alt={data?.title}
        width='124px'
        aspectRatio={1}
        className='bg-secondary mx-auto rounded-lg overflow-hidden'
      />
      <h4 className='text-primary text-3xl font-black my-6'>{data?.title}</h4>
      <p className='text-primary text-lg'>{data?.description}</p>
    </div>
  );
};
