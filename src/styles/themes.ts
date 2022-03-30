import { extendTheme } from '@chakra-ui/react';

// 259DFF blue 2090FF

export const theme = extendTheme({
  colors: {
    primary: '#242424',
    secondary: '#D172D8',
    secondaryObj: {
      600: '#D172D8',
      500: '#D172D8',
    },
    lightSecondaryObj: {
      600: '#E190F0',
      500: '#E190F0',
    },
    lightSecondary: '#E190F0',
    error: '#cd3248',
    background: '#F8F8F8',
    backgroundDark: '#EBEBEB',
    white: '#fff',
    nav: '#444343',
    900: '#181B23',
    800: '#1F2029',
    700: '#353646',
    600: '#4B4D63',
    500: '#616480',
    400: '#797D9A',
    300: '#9699B0',
    200: '#B3B5C6',
    100: '#D1D2DC',
    50: '#EEEEF2',
    null: null,
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
});
