import { FooterProps } from '@/types';
import Link from 'next/link';
import { ImageProvider } from '../global/ImageProvider';

export const Footer = ({ data }: { data: FooterProps }): JSX.Element => {
  return (
    <footer className='container px-5'>
      <div className='w-full h-[2px] bg-black/30 rounded-full'></div>
      <div className='mt-20'>
        <div className='grid grid-cols-1'>
          <div>
            <Link href='/'>
              <ImageProvider
                src={data?.logo}
                alt='logo'
                width='180px'
                aspectRatio={141 / 59}
                className='mb-6'
              />
            </Link>
            <p className='text-lg text-primary'>{data?.description}</p>
            <ul>
              <li className='flex items-start justify-start my-4'>
                <ImageProvider
                  src={data?.tel?.icon}
                  alt={data?.tel?.title}
                  width='24px'
                  aspectRatio={1}
                />
                <a
                  className='ms-2 text-primary'
                  href={`tel:${data?.tel?.title}`}
                >
                  {data?.tel?.title}
                </a>
              </li>
              <li className='flex items-start justify-start my-4'>
                <ImageProvider
                  src={data?.email?.icon}
                  alt={data?.email?.title}
                  width='24px'
                  aspectRatio={1}
                />
                <a
                  className='ms-2 text-primary'
                  href={`mailto:${data?.email?.title}`}
                >
                  {data?.email?.title}
                </a>
              </li>
              <li className='flex items-start justify-start my-4'>
                <ImageProvider
                  src={data?.address?.icon}
                  alt={data?.address?.title}
                  width='auto'
                  height='24px'
                  aspectRatio={1}
                />
                <p className='ms-2 mb-0 text-primary'>{data?.address?.title}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
