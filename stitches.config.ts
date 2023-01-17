import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      orange100: '#f6ebe5',
      orange500: '#ff5000',

      violet100: '#e7e9fb',
      violet500: '#5a59f6',

      green100: '#ebfedf',
      green200: '#cdfcc3',
      green300: '#affbb2',
      green500: '#51b27e',

      alert200: 'rgb(254 202 202)',
      alert500: 'rgb(239 68 68)',

      info500: '#33A7FF',
    },

    fontSize: {
      1: '11px',
      2: '13px',
      3: '14px',
      4: '1rem',
      5: '1.5rem',
      6: '2rem',
      7: '2.5em',
      8: '3rem',
      xl: '6rem',
    },
    borderRadius: {
      sm: '5px',
      md: '.5rem',
      lg: '1.125rem',
      xl: '2rem',
      full: '9999999px',
    },
    shadows: {
      orange100: '#f6ebe5',
      orange500: '#ff5000',

      violet100: '#e7e9fb',
      violet500: '#5a59f6',

      green100: '#ebfedf',
      green200: '#cdfcc3',
      green300: '#affbb2',
      green500: '#51b27e',
    },
  },

  media: {
    min_mobile: '(min-width: 640px)',
    min_tablet: '(min-width: 780px)',
    min_desktop: '(min-width: 1280px)',

    max_mobile: '(max-width: 640px)',
    max_tablet: '(max-width: 780px)',
    max_desktop: '(max-width: 1280px)',
  },

  utils: {
    marginX: (value: string) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value: string) => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingX: (value: string) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value: string) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    square: (value: string) => ({
      maxWidth: value,
      width: '100%',
      height: value,
    }),
    circle: (value: string) => ({
      square: value,
      borderRadius: '999999px',
    }),
  },
});
