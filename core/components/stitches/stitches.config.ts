import { createStitches } from '@stitches/react';

export const { styled } = createStitches({
  theme: {
    colors: {
      orange100: '#f6ebe5',
      orange500: '#ff5000',

      violet100: '#e7e9fb',
      violet500: '#5a59f6',

      green100: '#ebfedf',
      green200: '#cdfcc3',
      green500: '#51b27e',
    },
  },
  utils: {
    marginX: (value: string) => ({
      marginLeft: value,
      marginRight: value,
    }),
    paddingX: (value: string) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
});
