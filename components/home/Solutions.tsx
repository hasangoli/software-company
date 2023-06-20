'use client';

import { SolutionProps } from '@/types';
import { SwiperSlide } from 'swiper/react';
import { CustomSwiper } from '../global/CustomSwiper';
import { Solution } from './Solution';

export const Solutions = () => {
  const items: SolutionProps[] = [
    {
      image: '/assets/images/solution01.png',
      title: 'Architect your Solution',
      description:
        'Our team in on your operational, technological, and strategic challenges through an in-depth understanding of your business. We design a strategic roadmap to guide your result-oriented goals.',
    },
    {
      image: '/assets/images/solution02.png',
      title: 'Engineer your Solution',
      description:
        'We promptly put together your nearshore engineering dream team to fulfill your specific requirements. We create the most elegant solution for your difficulties by combining our deep tech expertise, Top 1% Tech Talent, and industry-specific experience.',
    },
    {
      image: '/assets/images/solution03.png',
      title: 'ReEngineer your Business Process',
      description:
        'Bolster by our team, your digital transformation swiftly gains speed and evolves into a digital acceleration. This process places the foundation for a more efficient and strong business that can meet demands at scale.',
    },
  ];

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

      <CustomSwiper className='mt-12 mb-8'>
        {items?.map((item, i) => (
          <SwiperSlide key={i}>
            <Solution data={item} />
          </SwiperSlide>
        ))}
      </CustomSwiper>
    </section>
  );
};
