'use client';

import { SpecializedDataProps, SpecializedItemProps } from '@/types';
import { SwiperSlide } from 'swiper/react';
import { CustomSwiper } from '../global/CustomSwiper';
import { SpecializedItem } from './SpecializedItem';

export const Specialized = ({ data }: { data: SpecializedDataProps }) => {
  return (
    <section className='bg-gray'>
      <div className='container px-5 py-16'>
        <p className='text-primary font-700 mb-5 text-lg'>{data?.title}</p>
        <h2 className='text-primary text-4xl font-700 mb-5'>
          {data?.mainTitle}
        </h2>

        <CustomSwiper className='mt-12 mb-8'>
          {data?.data?.map((slide: SpecializedItemProps, i: number) => (
            <SwiperSlide key={i}>
              {slide?.items?.map((item, i) => (
                <SpecializedItem key={i} data={item} />
              ))}
            </SwiperSlide>
          ))}
        </CustomSwiper>
      </div>
    </section>
  );
};
