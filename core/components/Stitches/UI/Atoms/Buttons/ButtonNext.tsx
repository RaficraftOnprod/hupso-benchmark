import { HTMLProps } from 'react';

import type * as Stitches from '@stitches/react';

import { ButtonStyle } from './style/style';

interface Props
  extends
  HTMLProps<HTMLButtonElement>,
  Stitches.VariantProps<typeof ButtonStyle> {
  type?: 'button' | 'submit' | 'reset',
  disabled?: boolean,
  outlined?: boolean
  radius?: 'sm' | 'xl' | undefined
  padding: 'sm' | 'xl' | undefined,
  colors?: 'orange' | 'violet' | 'green' | undefined
}

export default function Button({
  children,
  onClick = (e) => { console.warn(e); },
  onKeyUp = (e) => { console.warn(e); },
  disabled,
  outlined,
  radius,
  padding = 'sm',
  type = 'button',
  colors,
}: Props) {
  return (
    <ButtonStyle
      type={type}
      onClick={disabled ? (event) => { event.preventDefault(); } : onClick}
      onKeyUp={disabled ? (event) => { event.preventDefault(); } : onKeyUp}
      colors={colors}
      outlined={outlined}
      padding={padding}
      radius={radius}
      disabled={disabled}
    >
      {children}
    </ButtonStyle>
  );
}
