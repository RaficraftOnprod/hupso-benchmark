import { styled } from '@stitchesUI/stitches.config';

type Props = {
  color?: string,
  children: JSX.Element | JSX.Element[],
  css?: any,
}

export default function MainContainer({ color, children, css }: Props) {
  const MainSection = styled('section', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    backgroundColor: color,
    '>:nth-child(1)': {
      paddingLeft: '120px',
      paddingRight: '120px',
      maxWidth: '1440px',
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
