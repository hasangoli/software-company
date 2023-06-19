'use client';

import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper } from 'swiper/react';
import '../../styles/CustomSwiper.scss';

export const CustomSwiper = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <Swiper
      slidesPerView={1}
      autoplay={{ delay: 2500 }}
      pagination={{
        clickable: true,
        renderBullet: (index, className): string => {
          return `<span class='${className}'></span>`;
        },
      }}
      modules={[Pagination]}
    >
      {children}
    </Swiper>
  );
};
