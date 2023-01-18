import { ComponentType } from 'react';

import { styled } from 'stitches.config';

type Props = {
  width?: string,
  color?: string,
  children?: JSX.Element | null,
  css?: any,
}

const MainSection = styled('section', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 'auto',
  '>:nth-child(1)': {
    paddingLeft: '120px',
    paddingRight: '120px',
    maxWidth: '1440px',
    width: '100%',
  },
});

export default function MainContainer({
  children,
  css,
}: Props) {
  return (
    <MainSection css={css}>
      {children}
    </MainSection>
  );
}
