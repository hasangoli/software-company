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
    },
  });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
