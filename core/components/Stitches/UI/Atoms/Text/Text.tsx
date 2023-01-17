import { styled } from 'stitches.config';

export const Text = styled('p', {
  fontSize: '1rem',
  lineHeight: 1.5,
  fontWeight: 300,
  wordBreak: 'break-word',

  variants: {
    fontSize: {
      1: {
        fontSize: '11px',
      },
      2: {
        fontSize: '12px',
      },
      3: {
        fontSize: '13px',
      },
      4: {
        fontSize: '1rem',
      },
      5: {
        fontSize: '1.5',
      },
      6: {
        fontSize: '2rem',
      },
      7: {
        fontSize: '2.5rem',
      },
      8: {
        fontSize: '3rem',
      },

      xl: {
        fontSize: '$fontSize$xl',
        '@max_mobile': {
          fontSize: '4rem',
        },
        '@max_tablet': {
          fontSize: '3.5rem',
        },
      },
    },

    color: {
      white: {
        color: 'white',
      },
      info: {
        color: '$info500',
      },
      alert: {
        color: '$alert500',
      },
    },

    lineHeight: {
      1: {
        lineHeight: 1.1,
      },
      2: {
        lineHeight: 1.2,
      },
      3: {
        lineHeight: 1.3,
      },
      4: {
        lineHeight: 1.4,
      },
      5: {
        lineHeight: 1.5,
      },
      6: {
        lineHeight: 1.6,
      },
      7: {
        lineHeight: 1.7,
      },
      8: {
        lineHeight: 1.8,
      },
    },

    weight: {
      100: {
        fontWeight: 100,
      },
      200: {
        fontWeight: 200,
      },
      300: {
        fontWeight: 300,
      },
      400: {
        fontWeight: 400,
      },
      500: {
        fontWeight: 500,
      },
      600: {
        fontWeight: 600,
      },
      700: {
        fontWeight: 700,
      },
      800: {
        fontWeight: 800,
      },
      900: {
        fontWeight: 900,
      },
    },

    spacing: {
      1: {
        letterSpacing: '1px',
      },
      2: {
        letterSpacing: '2px',
      },
      3: {
        letterSpacing: '3px',
      },
      4: {
        letterSpacing: '4px',
      },
      5: {
        letterSpacing: '5px',
      },
    },

    italic: {
      true: {
        fontStyle: 'italic',
      },
    },
  },
});

export const H1 = styled('h1', Text, {
  fontSize: '1.5rem', // 24px
});

export const H2 = styled('h2', Text, {
  fontSize: '1.375rem', // 22px
});

export const H3 = styled('h3', Text, {
  fontSize: '1.25rem', // 20px
});

export const H4 = styled('h4', Text, {
  fontSize: '1.125rem', // 18px
});

export const H5 = styled('h5', Text);
export const H6 = styled('h6', Text);
export const Label = styled('label', Text);
export const Blockquote = styled('label', Text);
