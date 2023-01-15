import { MainSection } from './style';

type Props = {
  children: JSX.Element,
}

export default function MainContainer({ children }: Props) {
  return (
    <MainSection>
      {children}
    </MainSection>
  );
}
