'use client';

import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
      className={`relative ${className}`}
    >
      {children}
      {navigation ? (
        <>
          <div className='prev text-black absolute top-1/2 text-2xl cursor-pointer -translate-y-1/2 start-0 z-10 p-5'>
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          <div className='next text-black absolute top-1/2 text-2xl cursor-pointer -translate-y-1/2 end-0 z-10 p-5'>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </>
      ) : (
        ''
      )}
    </Swiper>
  );
};
