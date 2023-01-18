import { ComponentType } from 'react';

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
  tag?: ComponentType | keyof JSX.IntrinsicElements
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
  tag = 'div',
}: Props) {
  const Group = styled(tag, {
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
