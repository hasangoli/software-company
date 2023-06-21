'use client';

import { CustomLinkPropsTypes } from '@/types';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import Link from 'next/link';
import { FC } from 'react';

export const CustomLink: FC<CustomLinkPropsTypes> = ({
  title,
  href,
}): JSX.Element => {
  return (
    <Link
      href={href}
      className='block bg-gradient text-white w-full text-center p-3 rounded-lg font-bold'
    >
      {title} <ArrowForwardRoundedIcon />
    </Link>
  );
};
