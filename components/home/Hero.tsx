import { CustomLink } from '../global/CustomLink';
import { ImageProvider } from '../global/ImageProvider';

export const Hero = () => {
  return (
    <div>
      <div className='rounded-bl-[8rem] overflow-hidden mb-5'>
        <ImageProvider
          src='/assets/images/hero.jpg'
          alt='hero'
          width='100%'
          aspectRatio={16 / 9}
        />
      </div>
      <div className='p-5'>
        <h1 className='text-4xl mb-5 text-primary font-black'>
          Building dev team,
          <br />
          Quickly and
          <br />
          Affordably
        </h1>
        <p className='text-xl mb-8'>
          We specialize in helping you build a team of expert developers,
          testers, and leaders. We are setup to deliver long term solutions, or
          scale to different needs quickly.
        </p>
        <CustomLink title='Build a team' href='/' />
      </div>
    </div>
  );
};
