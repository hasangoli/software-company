'use client';

import { PropsWithChildren } from 'react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper } from 'swiper/react';
import { PaginationOptions } from 'swiper/types';

type CustomSwiperProps = {
  navigation?: boolean;
  className?: string;
  pagination?: PaginationOptions | boolean;
};

export const CustomSwiper = ({
  children,
  className,
  navigation = false,
  pagination = {
    clickable: true,
    renderBullet: (_, className): string => {
      return `<span class='${className}'></span>`;
    },
  },
}: PropsWithChildren<CustomSwiperProps>) => {
  return (
    <Swiper
      loop={true}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      }}
      navigation={{
        prevEl: '.prev',
        nextEl: '.next',
      }}
      pagination={pagination}
      modules={[Pagination, Navigation]}
      className={className}
    >
      {children}
      {navigation ? (
        <>
          <div className='prev'>prev</div>
          <div className='next'>next</div>
        </>
      ) : (
        ''
      )}
    </Swiper>
  );
};
