'use client';

import { SwiperSlide } from 'swiper/react';
import { CustomSwiper } from '../global/CustomSwiper';

export const Solutions = () => {
  return (
    <section className='container p-5'>
      <p className='text-primary font-black mb-5 text-lg'>Solutions</p>
      <h2 className='text-primary text-4xl font-black mb-5'>
        Software Solutions, with expert software engineering teams
      </h2>
      <p className='text-primary text-2xl'>
        We specialize in helping you build a team of expert developers, testers,
        and leaders.
      </p>

      <CustomSwiper>
        <SwiperSlide>hello</SwiperSlide>
      </CustomSwiper>
    </section>
  );
};
