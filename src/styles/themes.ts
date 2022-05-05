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
    tagColorObj1: {
      600: '#A393F5',
      500: '#A393F5',
    },
    tagColorObj2: {
      600: '#59B599',
      500: '#59B599',
    },
    tagColorObj3: {
      600: '#72B5E9',
      500: '#72B5E9',
    },
    tagColorObj4: {
      600: '#E9A672',
      500: '#E9A672',
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
