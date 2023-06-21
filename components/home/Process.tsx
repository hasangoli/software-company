import { ProcessProps } from '@/types';
import { ImageProvider } from '../global/ImageProvider';

export const Process = ({ data }: { data: ProcessProps }): JSX.Element => {
  return (
    <div className='flex flex-col items-center justify-center mt-12'>
      <ImageProvider
        src={data?.image}
        alt={data?.title}
        width='138px'
        aspectRatio={1}
        className='mb-3'
      />
      <p className='text-primary font-black text-3xl uppercase'>
        <span className='me-4 text-5xl'>{data?.number}</span>
        {data?.title}
      </p>
    </div>
  );
};
