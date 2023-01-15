import { styled } from '@stitchesUI/stitches.config';

type Props = {
  width?: string,
  color?: string,
  children?: JSX.Element | null,
  css?: any,
}

export default function MainContainer({
  width = '1440px',
  color,
  children,
  css,
}: Props) {
  const MainSection = styled('section', {
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
