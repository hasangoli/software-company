import { ImageProvider } from '../global/ImageProvider';

export const Contact = () => {
  return (
    <div>
      <ImageProvider src='/assets/images/contact.png' alt='' width='100%' height='550px' imgClass='object-cover' className='rounded-se-[7rem] overflow-hidden'/>
      <div className='container w-11/12 mx-auto px-6 py-8 translate-y-[-11rem] bg-white'>
        <h2 className='capitalize text-primary text-4xl font-semibold'>Connect with your next great hire today!</h2>
      </div>
    </div>
  );
};
