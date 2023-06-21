'use client';

import { MenuItemType } from '@/types';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import Link from 'next/link';
import { useState } from 'react';

export const MenuLi = ({ item }: { item: MenuItemType }): JSX.Element => {
  const [toggleItem, setToggleItem] = useState<boolean>(false);

  return (
    <li
      className={`pb-16 text-4xl font-bold ${
        item?.hasBg
          ? 'bg-gradient text-transparent bg-clip-text'
          : 'text-primary'
      }`}
    >
      <div className='flex items-center justify-between'>
        <Link href={item?.href}>{item?.title}</Link>
        {item?.children ? (
          <KeyboardArrowDownRoundedIcon
            fontSize='large'
            onClick={(): void => setToggleItem(prev => !prev)}
          />
        ) : (
          ''
        )}
      </div>
      {item?.children ? (
        <ul
          className={`${
            toggleItem ? 'h-full' : 'h-0'
          } overflow-hidden transition-all duration-200 ease-linear px-8`}
        >
          {item?.children?.map((child, i) => (
            <li key={i} className='pt-8'>
              <Link href={child?.href}>{child?.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        ''
      )}
    </li>
  );
};
