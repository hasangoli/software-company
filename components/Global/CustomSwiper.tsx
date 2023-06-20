'use client';

import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper } from 'swiper/react';
import '../../styles/CustomSwiper.scss';

export const CustomSwiper = ({
  className,
  children,
}: {
  className?: string;
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <Swiper
      loop={true}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        pauseOnMouseEnter: false,
        disableOnInteraction: false,
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
