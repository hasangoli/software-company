'use client';

import { CustomButtonPropsTypes } from '@/types';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { FC } from 'react';

export const CustomButton: FC<CustomButtonPropsTypes> = ({
  title,
  type,
  onClick,
  className,
}): JSX.Element => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`block bg-gradient text-white w-full text-center p-3 rounded-lg font-bold ${
        className ? className : ''
      }`}
    >
      {title} <ArrowForwardRoundedIcon />
    </button>
  );
};
