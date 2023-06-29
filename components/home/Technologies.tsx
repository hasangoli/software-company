'use client';

import { TechnologiesProps } from '@/types';
import { SwiperSlide } from 'swiper/react';
import { CustomSwiper } from '../global/CustomSwiper';
import { ImageProvider } from '../global/ImageProvider';

export const Technologies = ({ data }: { data: TechnologiesProps }) => {
  return (
    <section className='bg-gray'>
      <div className='container px-5 py-16'>
        <p className='text-primary text-center mb-5 text-2xl'>{data?.title}</p>
        <h2 className='text-primary text-center text-4xl mb-5'>
          {data?.mainTitle}
        </h2>

        <CustomSwiper className='mt-12 mb-8' pagination={false} navigation={true}>
          {data?.logos?.map((slide: string, i: number) => (
            <SwiperSlide
              key={i}
              className='!flex !items-center !justify-center !w-full'
            >
              <ImageProvider src={slide} width='200px' alt='' aspectRatio={1} imgClass='object-contain' />
            </SwiperSlide>
          ))}
        </CustomSwiper>
      </div>
    </section>
  );
};
