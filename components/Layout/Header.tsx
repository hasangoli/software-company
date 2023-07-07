'use client';

import { HeaderProps, MenuItemType } from '@/types';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import EastRoundedIcon from '@mui/icons-material/EastRounded';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Drawer } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import { CustomLink } from '../global/CustomLink';
import { ImageProvider } from '../global/ImageProvider';
import { MenuLi } from './MenuLi';

export const Header = ({ data }: { data: HeaderProps }) => {
  const [toggleDrawer, setToggleDrawer] = useState<boolean>(false);

  return (
    <header className='container'>
      <div className='flex items-center justify-between p-3'>
        <Link href='/'>
          <ImageProvider
            src={data?.logo}
            alt='logo'
            width='150px'
            aspectRatio={141 / 59}
          />
        </Link>
        <nav></nav>
        <ul className='flex items-center gap-x-4'>
          <li>
            <Link
              className='text-primary px-3 py-0.5 font-700 uppercase border-[2px] border-primary rounded-md flex items-center hover:text-white hover:bg-primary transition-all duration-200 ease-in-out group'
              href='/'
            >
              Build a Team
              <EastRoundedIcon
                className='text-primary ms-2 group-hover:text-white transition-all duration-200 ease-in-out'
                fontSize='small'
              />
            </Link>
          </li>
          <li>
            <Link className='text-primary' href='/'>
              Contact Us
            </Link>
          </li>
        </ul>
        <Button
          className='hover:bg-transparent md:hidden'
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
            <CustomLink title='Build a team' href='#' />
          </div>
        </nav>
      </Drawer>
    </header>
  );
};
