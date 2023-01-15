import { styled } from "../../../stitches.config";

export const Avatars = styled('div', {
  borderRadius: '999999px',
  backgroundColor: 'grey',
  overflow: "hidden",
  position: 'relative',
  'svg': {
    position: 'absolute',
    bottom: '0px',
    marginTop: '8px',
    color: 'white'
  },
  variants: {
    color: {
      orange: {
        backgroundColor: '$orange500',
        'svg': {
          color: '$orange100'
        }
      },
      violet: {
        backgroundColor: '$violet500',
        'svg': {
          color: 'violet100'
        }
      }
    },
    size: {
      sm: {
        $$size: '3rem',
        $$svgSize: '2rem',
        minWidth: '$$size',
        minHeight: '$$size',
        'svg': {
          width: '$$svgSize',
          height: '2rem',
          right: 'calc(($$size - $$svgSize) / 2)',
        }
      },
      md: {
        $$size: '2rem',
        $$svgSize: '1.5rem',
        minWidth: '$$size',
        minHeight: '$$size',
        'svg': {
          width: '$$svgSize',
          height: '$$svgSize',
          right: 'calc(($$size - $$svgSize) / 2)',
        }
      },
      xl: {
        $$size: '3rem',
        $$svgSize: '2rem',
        minWidth: '$$size',
        minHeight: '$$size',
        'svg': {
          width: '$$svgSize',
          height: '2rem',
          right: 'calc(($$size - $$svgSize) / 2)',
        }
      }

    },
    radius: {
      sm: {
        borderRadius: '5px',
      },
      xl: {
        borderRadius: '999999px',
      },
    },
  }
})