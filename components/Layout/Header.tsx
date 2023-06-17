'use client';

import { MenuItemType } from '@/types';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Drawer } from '@mui/material';
import { useState } from 'react';
import { CustomLink } from '../Global/CustomLink';
import { ImageProvider } from '../Global/ImageProvider';
import { MenuLi } from './MenuLi';

export const Header = () => {
  const menuItems: MenuItemType[] = [
    {
      title: 'How to start',
      href: '/',
      hasBg: true,
    },
    {
      title: 'Services',
      href: '/',
      children: [
        {
          title: 'Test 1',
          href: '/',
        },
        {
          title: 'Test 2',
          href: '/',
        },
      ],
    },
    {
      title: 'Technologies',
      href: '/',
      children: [
        {
          title: 'Test 1',
          href: '/',
        },
        {
          title: 'Test 2',
          href: '/',
        },
      ],
    },
    {
      title: 'Careers',
      href: '/',
    },
  ];

  const [toggleDrawer, setToggleDrawer] = useState<boolean>(false);

  return (
    <header>
      <div className='flex items-center justify-between p-3'>
        <ImageProvider
          src='/assets/images/logo.png'
          alt='logo'
          width='150px'
          aspectRatio={141 / 59}
        />
        <Button
          className='hover:bg-transparent'
          onClick={(): void => setToggleDrawer(true)}
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
            {menuItems?.map((item: MenuItemType, i: number) => (
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
