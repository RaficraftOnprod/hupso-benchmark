import { HTMLProps } from 'react';

import type * as Stitches from '@stitches/react';

import { ButtonStyle } from './style/style';

interface Props
  extends
  HTMLProps<HTMLButtonElement>,
  Stitches.VariantProps<typeof ButtonStyle> {
  css?: Stitches.CSS,
  disabled?: boolean,
}

export default function Button({
  children,
  colors,
  css,
  disabled,
  fullWidth,
  padding = 'sm',
  pills,
  radius,
  onClick,
  onKeyUp,
  outlined,
}: Props) {
  return (
    <ButtonStyle
      onClick={disabled ? (event) => { event.preventDefault(); } : onClick}
      onKeyUp={disabled ? (event) => { event.preventDefault(); } : onKeyUp}
      colors={colors}
      outlined={outlined}
      padding={padding}
      radius={radius}
      disabled={disabled}
      fullWidth={fullWidth}
      pills={pills}
      css={css}
    >
      {children}
    </ButtonStyle>
  );
}
