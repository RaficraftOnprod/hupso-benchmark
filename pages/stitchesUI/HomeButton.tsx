import { styled } from '@stitches/react';

import Button from '@core/components/Stitches/UI/Atoms/Buttons/Button';
import FlexGroup from '@core/components/Stitches/UI/Atoms/FlexGroup/FlexGroup';
import MainContainer from '@core/components/Stitches/UI/Atoms/MainContainer/MainContainer';
import { Href, H1 } from '@core/components/Stitches/UI/Atoms/Text/Text';

const Section = styled('section');

const HomeButton = () => (
  <Section css={{ padding: '0 0 6rem 0' }}>
    <MainContainer css={{ backgroundColor: 'gray', margin: '0 0 3rem 0', padding: '2rem 0' }}>
      <FlexGroup direction="column" gap="1rem">
        <div>
          <H1 weight="700" css={{ textAlign: 'center' }}>UI KIT with Stitches</H1>
          <section />
        </div>
        <FlexGroup gap="4rem">
          <Href href="/stitches" weight="700">
            Demo Hupso
          </Href>
          <Href href="/stitchesUI/HomeText" weight="700">
            UI Text
          </Href>
          <Href href="/stitchesUI/HomeButton" weight="700">
            UI Button
          </Href>
        </FlexGroup>
      </FlexGroup>
    </MainContainer>

    {/* Standart Button */}

    <MainContainer css={{ margin: '0 0 4rem 0' }}>
      <FlexGroup gap="1.5rem" css={{ justifyContent: 'space-between' }}>

        <Button colors="orange">Button</Button>
        <Button colors="orange" disabled>Button</Button>
        <Button colors="violet">Button</Button>
        <Button colors="violet" fullWidth>Button</Button>

      </FlexGroup>
    </MainContainer>

    {/* Standart Button */}

    <MainContainer css={{ margin: '0 0 4rem 0' }}>
      <FlexGroup gap="1.5rem" css={{ justifyContent: 'space-between' }}>

        <Button padding="xl" colors="orange">Button</Button>

        <Button padding="xl" colors="orange" disabled>Button</Button>

        <Button padding="xl" colors="violet">Button</Button>

        <Button padding="xl" colors="violet" fullWidth>
          Button
        </Button>
      </FlexGroup>
    </MainContainer>

  </Section>
);

export default HomeButton;
