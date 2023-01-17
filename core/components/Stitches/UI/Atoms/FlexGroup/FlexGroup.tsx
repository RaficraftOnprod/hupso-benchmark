import type * as Stitches from '@stitches/react';

import { styled } from 'stitches.config';

type Props = {
  alignItems?: string,
  backgroundColor?: string,
  children: JSX.Element | JSX.Element[]
  css?: any,
  direction?: string,
  gap?: string,
  justifyContent?: string,
  customClass?: string | boolean
}

export default function FlexGroup({
  gap = '0.5rem',
  direction = 'row',
  justifyContent = 'flexStart',
  alignItems = 'center',
  backgroundColor = 'transparent',
  css = {},
  children,
  customClass = false,
}: Props) {
  const Group = styled('div', {
    display: 'flex',
    flexDirection: direction,
    flexWrap: 'wrap',
    justifyContent,
    alignItems,
    gap,
    backgroundColor,
    ...css,
  });

  return (
    <Group
      className={customClass}
    >
      {children}
    </Group>
  );
}
