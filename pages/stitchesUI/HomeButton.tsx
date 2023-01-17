import { styled } from '@stitches/react';

import { IconeUser } from '@core/assets/svg/icones';
import {
  Button, CircleButton, AvatarButton,
} from '@core/components/Stitches/UI/Atoms/Buttons/Button';
import ButtonNext from '@core/components/Stitches/UI/Atoms/Buttons/ButtonNext';
import FlexGroup from '@core/components/Stitches/UI/Atoms/FlexGroup/FlexGroup';
import MainContainer from '@core/components/Stitches/UI/Atoms/MainContainer/MainContainer';
import { Href } from '@core/components/Stitches/UI/Atoms/Text/Text';

const Section = styled('section');

const HomeButton = () => (
  <Section css={{ padding: '0 0 6rem 0' }}>
    <MainContainer css={{ backgroundColor: 'gray', margin: '0 0 3rem 0' }}>
      <FlexGroup direction="column">
        <div>
          <h1 style={{ textAlign: 'center', padding: '2rem 0' }}>UI KIT with Stitches</h1>
          <section />
        </div>
        <FlexGroup>
          <Href href="/stitches">
            Demo Hupso
          </Href>
          <Href href="/stitches">
            Demo Hupso
          </Href>
        </FlexGroup>
      </FlexGroup>
    </MainContainer>

    {/* Standart Button */}

    <MainContainer css={{ margin: '0 0 4rem 0' }}>
      <FlexGroup gap="1.5rem" css={{ justifyContent: 'space-between' }}>

        <ButtonNext padding="xl" colors="orange">
          TOTO
        </ButtonNext>

        <ButtonNext padding="xl" colors="orange" disabled>
          TOTO
        </ButtonNext>
      </FlexGroup>
    </MainContainer>

  </Section>
);

export default HomeButton;
