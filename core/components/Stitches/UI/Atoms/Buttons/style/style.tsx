import type * as Stitches from '@stitches/react';

import { styled } from 'stitches.config';

export const ButtonStyle = styled('button', {
  appearance: 'none',
  fontWeight: '500',
  cursor: 'pointer',
  border: '1px solid transparent',
  transition: 'ease .5s',
  '&:hover': {
    backgroundColor: 'black',
    color: 'white',
    border: '1px solid',
  },

  variants: {
    colors: {
      gray: {
        padding: '.875rem',
        backgroundColor: 'gainsboro',
        color: 'black',
        '&:hover': {
          backgroundColor: 'lightgray',
          color: 'black',
        },
      },

      orange: {
        padding: '.875rem',
        backgroundColor: '$orange500',
        color: 'white',
        '&:hover': {
          backgroundColor: 'white',
          color: '$orange500',
          border: '1px solid',
        },
      },

      violet: {
        padding: '.875rem',
        backgroundColor: '$violet500',
        color: 'white',
        '&:hover': {
          backgroundColor: 'white',
          color: '$violet500',
        },
      },

      green: {
        padding: '.875rem',
        backgroundColor: '$green200',
        color: '$violet500',
        '&:hover': {
          backgroundColor: '$green500',
          color: '$violet500',
          border: '1px solid',
        },
      },

      alert: {
        padding: '.875rem',
        backgroundColor: '$alert500',
        color: 'white',
        '&:hover': {
          backgroundColor: 'white',
          color: '$alert500',
          border: '1px solid',
        },
      },
    },

    outlined: {
      true: {
        backgroundColor: 'white',
        border: '1px solid',
      },
    },

    disabled: {
      true: {
        cursor: 'not-allowed',
        textDecorationLine: 'line-through',

      },
    },

    fullWidth: {
      true: {
        maxWidth: '100%',
        width: '100%',
        '@max_tablet': {
          maxWidth: '50%',
        },
      },
    },

    pilled: {
      true: {
        borderRadius: '999999px',
      },
    },

    padding: {
      sm: {
        padding: '.875rem .875rem',
      },
      xl: {
        padding: '1.375rem 2.375rem',
      },
    },

    radius: {
      sm: {
        borderRadius: '$borderRadius$sm',
      },
      md: {
        borderRadius: '$borderRadius$md',
      },
      xl: {
        borderRadius: '$borderRadius$xl',
      },
    },
  },
  compoundVariants: [
    {
      colors: 'gray',
      outlined: true,
      css: {
        borderColor: 'gainsboro',
        backgroundColor: 'white',
        color: 'black',
        '&:hover': {
          backgroundColor: 'black',
          color: 'white',
        },
      },
    },
    {
      colors: 'orange',
      outlined: true,
      css: {
        borderColor: '$orange500',
        backgroundColor: 'white',
        color: '$orange500',
        '&:hover': {
          backgroundColor: '$orange500',
          color: 'white',
        },
      },
    },
    {
      colors: 'violet',
      outlined: true,
      css: {
        borderColor: '$violet500',
        backgroundColor: 'white',
        color: '$violet500',
        '&:hover': {
          backgroundColor: '$violet500',
          color: 'white',
        },
      },
    },
    {
      colors: 'alert',
      outlined: true,
      css: {
        borderColor: '$alert500',
        backgroundColor: 'white',
        color: '$alert500',
        '&:hover': {
          backgroundColor: '$alert500',
          color: 'white',
        },
      },
    }],
  defaultVariants: {
    colors: 'gray',
  },
});

export const CircleButton = styled(ButtonStyle, {
  position: 'relative',
  overflow: 'hidden',

  variants: {
    circle: {
      xs: {
        $$xsSize: '2rem',
        circle: '$$xsSize',
        padding: 0,
      },
      sm: {
        $$smSize: '3rem',
        circle: '$$smSize',
        padding: 0,
      },
      md: {
        $$mdSize: '4rem',
        circle: '$$mdSize',
        padding: 0,
      },
      lg: {
        $$lgSize: '6rem',
        circle: '$$lgSize',
        padding: 0,
      },
      xl: {
        $$xlSize: '12rem',
        circle: '$$xlSize',
        padding: 0,
      },
    },
  },
});

export const AvatarButton = styled(CircleButton, {
  svg: {
    position: 'absolute',
    bottom: '0',
    square: '3rem',
    left: 'calc((4rem - 3rem) / 2)',
  },
});
