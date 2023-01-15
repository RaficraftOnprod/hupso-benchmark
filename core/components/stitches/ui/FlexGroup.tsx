import { styled } from '@stitchesUI/stitches.config';

type Props = {
  alignItems?: string,
  backgroundColor?: string,
  children: JSX.Element | JSX.Element[]
  css?: any,
  direction?: string,
  gap?: string,
  justifyContent?: string,
}

export default function FlexGroup({
  gap = '0.5rem',
  direction = 'row',
  justifyContent = 'flexStart',
  alignItems = 'center',
  backgroundColor = 'transparent',
  css = {},
  children,
}: Props) {
  const Group = styled('div', {
    display: 'flex',
    flexDirection: direction,
    justifyContent,
    alignItems,
    gap,
    backgroundColor,
    ...css,
  });

  return (
    <Group>
      {children}
    </Group>
  );
}
