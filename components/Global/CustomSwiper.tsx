'use client';

import { PropsWithChildren } from 'react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper } from 'swiper/react';

export const CustomSwiper = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <Swiper
      loop={true}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      }}
      pagination={{
        clickable: true,
        renderBullet: (index, className): string => {
          return `<span class='${className}'></span>`;
        },
      }}
      modules={[Pagination]}
      className={className}
    >
      {children}
    </Swiper>
  );
};
