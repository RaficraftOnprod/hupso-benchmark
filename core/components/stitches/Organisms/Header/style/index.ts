import { styled } from '@stitchesUI/stitches.config';

export default styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingBottom: '3rem',
  paddingTop: '3rem',
  '.navigation': {
    display: 'flex',
    alignItems: 'center',
    gap: '30px',
  },
  a: {
    fontSize: '12px',
    fontWeight: '500',
  },
});
