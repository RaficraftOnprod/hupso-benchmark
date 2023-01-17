import { ComponentType } from 'react';

import { styled } from 'stitches.config';

type Props = {
  width?: string,
  color?: string,
  children?: JSX.Element | null,
  tag?: ComponentType | keyof JSX.IntrinsicElements
  css?: any,
}

export default function MainContainer({
  width = '1440px',
  color,
  children,
  tag = 'section',
  css,
}: Props) {
  const MainSection = styled(tag, {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    backgroundColor: color,
    '>:nth-child(1)': {
      paddingLeft: '120px',
      paddingRight: '120px',
      maxWidth: width,
      width: '100%',
    },
    ...css,
  });

  return (
    <MainSection>
      {children}
    </MainSection>
  );
}
