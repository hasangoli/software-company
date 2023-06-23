import { SpecializedProps } from '@/types';
import { ImageProvider } from '../global/ImageProvider';

export const SpecializedItem = ({ data }: { data: SpecializedProps }) => {
  return (
    <div className='flex items-center shadow-custom p-3 mx-2 mb-6 mt-2 rounded-lg overflow-hidden border-l-secondary border-l-[12px]'>
      <ImageProvider
        src={data?.image}
        alt={data?.title}
        width='35px'
        aspectRatio={1}
        className='ms-3'
      />
      <div className='ms-5 flex items-center min-h-[4rem]'>
        <p className='mb-0 text-lg text-primary'>{data?.title}</p>
      </div>
    </div>
  );
};
