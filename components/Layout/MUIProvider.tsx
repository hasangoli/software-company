'use client';

import { ThemeProvider, createTheme } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

export const MUIProvider: FC<PropsWithChildren> = ({ children }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: 'rgb(22, 32, 95)',
      },
      secondary: {
        main: 'rgb(255, 248, 86)',
      },
      // gray: {
      //   main: 'rgb(249, 249, 249)',
      // },
      // white: {
      //   main: 'rgb(255 ,255 ,255)',
      // },
      // black: {
      //   main: 'rgb(0 ,0 ,0)',
      // },
      // transparent: {
      //   main: 'rgba(0, 0, 0, 0)',
      // },
    },
  });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
