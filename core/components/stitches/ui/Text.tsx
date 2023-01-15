import { ComponentType } from 'react';

import { styled } from '@stitchesUI/stitches.config';

type Props = {
  fontSize?: string,
  lineHeight?: number,
  tag?: ComponentType | keyof JSX.IntrinsicElements
  css?: any,
  color?: string,
  children: JSX.Element | JSX.Element[] | string,
  size?: 1 | 2 | 3 | 4 | 5 | 6 | undefined

}

export default function Text({
  fontSize = '1rem',
  color = 'black',
  tag = 'p',
  css = {},
  children,
  size = undefined,
}: Props) {
  const Typo = styled(tag, {
    fontSize,
    color,
    ...css,
    variants: {
      size: {
        1: {
          fontSize: '11px',
          lineHeight: '1.2',
        },
        2: {
          fontSize: '12px',
          lineHeight: '1.2',
        },
        3: {
          fontSize: '13px',
          lineHeight: '1.2',
        },
        4: {
          fontSize: '1rem',
          lineHeight: '1.2',
        },
        5: {
          fontSize: '12px',
          lineHeight: '1.2',
        },
        6: {
          fontSize: '3.625rem',
          lineHeight: '1.2',
        },
      },
    },
  });

  return (
    <Typo
      size={size}
      color={color}
    >
      {children}
    </Typo>
  );
}
