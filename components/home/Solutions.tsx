'use client';

import { SolutionProps, SolutionsData } from '@/types';
import { SwiperSlide } from 'swiper/react';
import { CustomSwiper } from '../global/CustomSwiper';
import { Solution } from './Solution';

export const Solutions = ({
  data,
  center = false,
}: {
  data: SolutionsData;
  center?: boolean;
}): JSX.Element => {
  return (
    <section className='container px-5 py-16'>
      <p className='text-primary font-700 mb-5 text-lg'>{data?.title}</p>
      <h2 className='text-primary text-4xl font-700 mb-5'>{data?.mainTitle}</h2>
      <p className='text-primary text-2xl'>{data?.description}</p>

      <CustomSwiper className='mt-12 mb-8'>
        {data?.data?.map((item: SolutionProps, i: number) => (
          <SwiperSlide key={i}>
            <Solution data={item} center={center} />
          </SwiperSlide>
        ))}
      </CustomSwiper>
    </section>
  );
};
