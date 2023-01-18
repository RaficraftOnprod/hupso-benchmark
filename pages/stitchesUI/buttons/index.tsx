import { styled } from '@stitches/react';

import Button from '@core/components/Stitches/UI/Atoms/Buttons/Button';
import FlexGroup from '@core/components/Stitches/UI/Atoms/FlexGroup/FlexGroup';
import MainContainer from '@core/components/Stitches/UI/Atoms/MainContainer/MainContainer';

const Section = styled('section');

const HomeButton = () => (
  <Section css={{ padding: '6rem 0 6rem 0' }}>

    {/* Standart Button */}

    <MainContainer css={{ margin: '0 0 4rem 0' }}>
      <FlexGroup gap="1.5rem" css={{ justifyContent: 'space-between' }}>

        {/* <Button outlined>Default</Button>
        <Button disabled>Disabled</Button> */}

        <Button>Default</Button>
        <Button colors="orange" radius="sm" outlined>Button</Button>
        <Button colors="violet" radius="sm" pills>Button</Button>
        <Button colors="alert" radius="sm" disabled>Button</Button>
        <Button colors="green" radius="sm" fullWidth>Button</Button>

      </FlexGroup>
    </MainContainer>

    {/* FullWidth Button */}

    <MainContainer css={{ margin: '0 0 4rem 0' }}>
      <FlexGroup gap="1.5rem" css={{ justifyContent: 'space-between' }}>

        <Button padding="xl" radius="sm" fullWidth>Default</Button>
        <Button
          padding="xl"
          fullWidth
          radius="sm"
          css={{
            backgroundColor: 'rgb(34 211 238)',
            color: 'white',
            transition: '1.5s',
            '&:hover': {
              backgroundColor: 'black',
              color: 'white',
            },
          }}
        >
          Overwritre Styles
        </Button>
        <Button
          padding="xl"
          colors={{
            '@initial': 'violet',
            '@md': 'orange',
            '@lg': 'green',
          }}
          fullWidth
        >
          Full Width Button
        </Button>
        <Button padding="xl" colors="orange" radius="sm" fullWidth>
          Full Width Button
        </Button>

      </FlexGroup>
    </MainContainer>

    {/* Pills Button */}

    <MainContainer css={{ margin: '0 0 4rem 0' }}>
      <FlexGroup gap="1.5rem" css={{ justifyContent: 'space-between' }}>

        <Button padding="xl" pills>Default</Button>
        <Button padding="xl" disabled pills>Disabled</Button>
        <Button colors="violet" padding="xl" pills>Button</Button>
        <Button colors="green" padding="xl" pills>Button</Button>
        <Button colors="alert" padding="xl" outlined pills>Button</Button>

      </FlexGroup>

    </MainContainer>

  </Section>
);

export default HomeButton;
