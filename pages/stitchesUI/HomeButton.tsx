import { styled } from '@stitches/react';

import { IconeUser } from '@core/assets/svg/icones';
import {
  Button, CircleButton, AvatarButton,
} from '@core/components/Stitches/UI/Atoms/Buttons/Button';
import FlexGroup from '@core/components/Stitches/UI/Atoms/FlexGroup/FlexGroup';
import MainContainer from '@core/components/Stitches/UI/Atoms/MainContainer/MainContainer';
import { H1, Href } from '@core/components/Stitches/UI/Atoms/Text/Text';

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
      <FlexGroup
        customClass="button_std"
        gap="3rem"
        css={{ justifyContent: 'space-between' }}
      >
        <Button radius="sm" onClick={() => { alert('click !'); }}>Click !</Button>
        <Button size="sm" radius="sm" pills disabled>Disabled</Button>

        <Button colors="orange" radius="sm">Button</Button>
        <Button colors="orange" radius="sm" outlined>Button</Button>

        <Button colors="violet" radius="sm">Button</Button>
        <Button colors="violet" radius="sm" outlined>Button</Button>
      </FlexGroup>
    </MainContainer>

    {/* Button Full Width  */}

    <MainContainer css={{ margin: '0 0 4rem 0' }}>
      <FlexGroup direction="column" gap="1.5rem" css={{ justifyContent: 'space-between' }}>
        <Button size="xl" radius="sm" fullWidth>Default</Button>
        <Button
          size="xl"
          fullWidth
          radius="sm"
          css={{
            backgroundColor: 'rgb(34 211 238)',
            colors: 'white',
            transition: '1.5s',
            '&:hover': {
              backgroundcolors: 'black',
              colors: 'white',
            },
          }}
        >
          Overwritre Styles
        </Button>
        <Button
          size="xl"
          colors={{
            '@initial': 'violet',
            '@md': 'orange',
            '@lg': 'green',
          }}
          fullWidth
        >
          Responsive inside
        </Button>

        <Button radius="sm" fullWidth outlined>Full width</Button>

        <Button colors="alert" radius="sm" fullWidth outlined>Full width</Button>
        <Button colors="alert" radius="xl" fullWidth>Full width</Button>

        <Button colors="orange" radius="xl" fullWidth>Full width</Button>
        <Button colors="violet" radius="xl" fullWidth outlined>Full width</Button>
      </FlexGroup>
    </MainContainer>

    {/* Big Button */}

    <MainContainer css={{ margin: '0 0 4rem 0' }}>
      <FlexGroup gap="1.5rem" css={{ justifyContent: 'space-between' }}>
        <Button size="xl" radius="sm">Button XL</Button>
        <Button size="xl" radius="sm" outlined>Button XL</Button>

        <Button size="xl" colors="alert" radius="sm" outlined>Button XL</Button>
        <Button size="xl" colors="alert" radius="xl">Button XL</Button>

        <Button size="xl" colors="orange" radius="xl">Button XL</Button>
        <Button size="xl" colors="violet" radius="xl" outlined>Button XL</Button>
      </FlexGroup>
    </MainContainer>

    {/* Circle Button */}

    <MainContainer css={{ margin: '0 0 4rem 0' }}>
      <FlexGroup gap="1.5rem" css={{ justifyContent: 'space-between' }}>
        <CircleButton circle="xl" colors="green" onClick={() => { alert('click !'); }}>Click !</CircleButton>
        <CircleButton circle="lg" colors="violet" outlined>Circle lg</CircleButton>
        <CircleButton circle="md" colors="alert">md</CircleButton>
        <CircleButton circle="sm" colors="alert" outlined>sm</CircleButton>
        <CircleButton circle="xs">xs</CircleButton>
      </FlexGroup>
    </MainContainer>

    {/* Avatar Button */}

    <MainContainer css={{ margin: '0 0 4rem 0' }}>
      <FlexGroup gap="1.5rem" css={{ justifyContent: 'space-between' }}>
        <AvatarButton circle="md" colors="violet">
          <IconeUser />
        </AvatarButton>

        <AvatarButton circle="md" colors="green">
          <IconeUser />
        </AvatarButton>

        <AvatarButton circle="md" colors="orange">
          <IconeUser />
        </AvatarButton>

      </FlexGroup>
    </MainContainer>
  </Section>
);

export default HomeButton;
