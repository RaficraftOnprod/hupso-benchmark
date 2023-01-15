import { ComponentType } from 'react';

import { styled } from '@stitchesUI/stitches.config';

type Props = {
  children: JSX.Element | JSX.Element[]
  colorContainer?: string,
  colorMedia?: string,
  css?: any,
  padding?: string,
  radius?: string,
  size?: string,
  tag?: ComponentType | keyof JSX.IntrinsicElements
}

export default function IconContainer({
  children,
  colorContainer = 'transparent',
  colorMedia = 'transparent',
  css = {},
  padding = '0',
  radius = '0',
  size = 'auto',
  tag = 'div',
}: Props) {
  const Container = styled(tag, {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colorContainer,
    padding,
    borderRadius: radius,
    '.media': {
      width: size,
      height: size,
      color: colorMedia,
    },
    ...css,
  });

  return (
    <Container>
      {children}
    </Container>
  );
}
