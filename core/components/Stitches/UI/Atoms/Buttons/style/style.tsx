import { styled } from 'stitches.config';

export const ButtonStyle = styled('button', {
  fontWeight: 'bold',
  cursor: 'pointer',
  border: '1px solid transparent',
  transition: 'ease .5s',
  '&:hover': {
    backgroundColor: 'black',
    color: 'white',
  },

  variants: {
    colors: {
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
          color: 'white',
          border: '1px solid',
        },
      },
      alert: {
        backgroundColor: '$alert500',
        color: 'white',
        transition: 'ease .5s',
        '&:hover': {
          backgroundColor: 'white',
          color: '$alert500',
          border: '1px solid',
        },
      },
      gray: {
        padding: '.875rem',
        backgroundColor: 'gainsboro',
        color: 'black',
        '&:hover': {
          backgroundColor: 'lightgray',
          color: 'black',
        },
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
        borderRadius: '5px',
      },
      xl: {
        borderRadius: '1.25rem',
      },
    },
    outlined: {
      true: {
        backgroundColor: 'white',
        border: '1px solid',
      },
    },
    fullWidth: {
      true: {
        maxWidth: '50%',
        width: '100%',
        '@sm': {
          maxWidth: '100%',
        },
      },
    },
    pills: {
      true: {
        borderRadius: '999999px',
      },
    },
    disabled: {
      true: {
        backgroundColor: 'gainsboro',
        border: '1px solid gray',
        cursor: 'not-allowed',
        textDecorationLine: 'line-through',
        color: 'gray',
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
    },

  ],
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
