import { styled } from '@stitchesUI/stitches.config';

export default styled('nav', {
  display: 'flex',
  ul: {
    display: 'flex',
    alignItems: 'center',
    gap: '30px',
    maxHeight: '30px',
    height: '30px',
  },
  li: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '6px',
    a: {
      textDecoration: 'none',
      color: 'black',
      fontSize: '12px',
    },
  },
  '.triangle': {
    width: 0,
    height: 0,
    borderWidth: '9px 5px 0 5px',
    borderColor: '$orange500 transparent transparent transparent',
    borderStyle: 'solid',
    display: 'flex',
    alignItems: 'center',
  },
});
