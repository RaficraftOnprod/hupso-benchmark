import { ComponentType } from 'react';

import { styled } from '@stitchesUI/stitches.config';

type Props = {
  color?: string,
  children?: JSX.Element | JSX.Element[],
  tag?: ComponentType | keyof JSX.IntrinsicElements
  css?: any,
}

export default function Custom({
  children,
  css,
  tag = 'section',
}: Props) {
  const Container = styled(tag, {
    ...css,
  });

  return <Container>{children}</Container>;
}
