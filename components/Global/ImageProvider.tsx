import { ImagePropsType } from '@/types';
import Image from 'next/image';
import { FC } from 'react';

export const ImageProvider: FC<ImagePropsType> = ({
  src,
  alt,
  width,
  height,
  aspectRatio,
}) => {
  return (
    <div
      className='relative'
      style={{ height: height, width: width, aspectRatio: aspectRatio }}
    >
      <Image src={src} alt={alt} fill />
    </div>
  );
};
