import { HeroProps } from '@/types';
import { CustomLink } from '../global/CustomLink';
import { ImageProvider } from '../global/ImageProvider';

export const Hero = ({ data }: { data: HeroProps }): JSX.Element => {
  return (
    <section className='container'>
      <div className='rounded-bl-[8rem] overflow-hidden mb-5'>
        <ImageProvider
          src={data?.image}
          alt={data?.title}
          width='100%'
          aspectRatio={16 / 9}
        />
      </div>
      <div className='p-5'>
        <h1 className='text-4xl mb-5 text-primary font-900'>{data?.title}</h1>
        <p className='text-xl mb-8'>{data?.description}</p>
        <CustomLink title='Build a team' href='/' />
      </div>
    </section>
  );
};
