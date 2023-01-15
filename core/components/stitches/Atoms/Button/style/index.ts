import { styled } from '@stitchesUI/stitches.config';

export const Buttons = styled('button', {
  // Mini reset
  appearance: 'none',

  fontWeight: 'bold',
  cursor: 'pointer',
  border: '1px solid transparent',
  variants: {
    color: {
      orange: {
        backgroundColor: '$orange500',
        color: 'white',
        transition: 'ease .5s',
        '&:hover': {
          backgroundColor: 'white',
          color: '$orange500',
          border: '1px solid',
        },
      },
      violet: {
        backgroundColor: '$violet500',
        color: 'white',
        transition: 'ease .5s',
        '&:hover': {
          backgroundColor: 'white',
          color: '$violet500',
          border: '1px solid',
        },
      },
      green: {
        backgroundColor: '$green200',
        color: '$violet500',
        transition: 'ease .5s',
        '&:hover': {
          backgroundColor: '$green500',
          color: '$violet500',
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
      },
    },
    size: {
      sm: {
        padding: '.875rem .875rem',
      },
      xl: {
        padding: '1.375rem 2.375rem',
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
