import { styled } from '@stitchesUI/stitches.config';

export const Buttons = styled('button', {
  // Mini reset
  appearance: 'none',
  border: 'none',

  fontWeight: 'bold',
  cursor: 'pointer',
  variants: {
    color: {
      orange: {
        backgroundColor: '$orange500',
        color: 'white',
        transition: 'ease .5s',
        '&:hover': {
          backgroundColor: '$orange100',
          color: '$orange500',
        },
      },
      violet: {
        backgroundColor: '$violet500',
        color: 'white',
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
      },
    },
    size: {
      sm: {
        padding: '1rem 1rem',
      },
      xl: {
        padding: '1.5rem 2.5rem',
      },
    },
    radius: {
      sm: {
        borderRadius: '5px',
      },
      xl: {
        borderRadius: '1.25rem',
      },
    },
  },
  compoundVariants: [{
    color: 'violet',
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
    color: 'orange',
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
  }],
});
