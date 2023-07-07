import { FooterLink, FooterProps, FooterSide, SocialProps } from '@/types';
import Link from 'next/link';
import { ImageProvider } from '../global/ImageProvider';

export const Footer = ({ data }: { data: FooterProps }): JSX.Element => {
  return (
    <footer className='container px-5'>
      <div className='w-full h-[2px] bg-black/30 rounded-full'></div>
      <div className='mt-20'>
        <div className='grid grid-cols-1'>
          <div className='mb-3'>
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
          {data?.links?.map((side: FooterSide, i: number) => (
            <div key={i}>
              <p className='text-primary text-lg font-700 mb-3'>
                {side?.title}
              </p>
              <ul className='mb-8'>
                {side?.children?.map((link: FooterLink, i: number) => (
                  <li key={i} className='py-3'>
                    <Link className='text-primary' href={link?.href}>
                      {link?.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p className='text-primary text-lg font-semibold'>Follow Us</p>
          <div className='grid grid-cols-5 my-3'>
            {data?.socials?.map((social: SocialProps, i: number) => (
              <Link key={i} href={social?.link}>
                <ImageProvider
                  src={social?.icon}
                  alt=''
                  width='46px'
                  aspectRatio={1}
                />
              </Link>
            ))}
          </div>
          <p className='text-primary my-5'>
            Ⓒ {new Date().getFullYear()} HasanDev
          </p>
        </div>
      </div>
    </footer>
  );
};
