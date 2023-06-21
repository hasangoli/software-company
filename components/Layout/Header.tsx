'use client';

import { MenuItemType, header } from '@/types';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Drawer } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import { CustomLink } from '../global/CustomLink';
import { ImageProvider } from '../global/ImageProvider';
import { MenuLi } from './MenuLi';

export const Header = ({ data }: { data: header }): JSX.Element => {
  const [toggleDrawer, setToggleDrawer] = useState<boolean>(false);

  return (
    <header>
      <div className='flex items-center justify-between p-3'>
        <Link href='/'>
          <ImageProvider
            src={data?.logo}
            alt='logo'
            width='150px'
            aspectRatio={141 / 59}
          />
        </Link>
        <Button
          className='hover:bg-transparent'
          onClick={() => setToggleDrawer(true)}
        >
          <MenuIcon className='text-primary' fontSize='large' />
        </Button>
      </div>
      <Drawer
        anchor='right'
        open={toggleDrawer}
        onClose={(): void => {
          setToggleDrawer(false);
        }}
      >
        <div className='flex items-center justify-end'>
          <Button
            className='hover:bg-transparent p-5 pb-16'
            onClick={(): void => setToggleDrawer(false)}
          >
            <CloseRoundedIcon className='text-primary' fontSize='large' />
          </Button>
        </div>
        <nav className='w-screen h-screen px-10'>
          <ul>
            {data?.data?.map((item: MenuItemType, i: number) => (
              <MenuLi item={item} key={i} />
            ))}
          </ul>
          <div className='flex items-center justify-center'>
            <CustomLink title='Build a team' href='/' />
          </div>
        </nav>
      </Drawer>
    </header>
  );
};
