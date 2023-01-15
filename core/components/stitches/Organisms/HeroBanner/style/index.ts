import { styled } from '../../../stitches.config';

export const HeroBanners = styled('div', {
  height: '752px',
  background: '#FFFFFF',
  backgroundImage: 'url(/assets/img/hero.png)',
  display: 'flex',
  '.hero_bloc': {
    flex: 1,
    maxWidth: '63%',
    paddingTop: '129px',
    display: 'flex',
    flexDirection: 'column',
    gap: '2.5rem',
    '.text': {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
    },
    h1: {
      maxWidth: '93%',
    },
    p: {
      maxWidth: '53%',
      color: 'gray',
    },
    '.button_group': {
      display: 'flex',
      gap: '2rem',
    },

  },
});
