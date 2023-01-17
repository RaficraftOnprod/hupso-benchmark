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
    <MainContainer css={{ backgroundColor: 'gray', margin: '0 0 3rem 0', paddingY: '2rem' }}>
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
        <Button radius="sm">Button</Button>
        <Button radius="sm" outlined>Button</Button>

        <Button color="orange" radius="sm">Button</Button>
        <Button color="orange" radius="sm" outlined>Button</Button>

        <Button color="violet" radius="sm">Button</Button>
        <Button color="violet" radius="sm" outlined>Button</Button>
      </FlexGroup>
    </MainContainer>

    {/* Button Full Width  */}

    <MainContainer css={{ margin: '0 0 4rem 0' }}>
      <FlexGroup direction="column" gap="1.5rem" css={{ justifyContent: 'space-between' }}>
        <Button radius="sm" fullWidth>Full width</Button>
        <Button radius="sm" fullWidth outlined>Full width</Button>

        <Button color="alert" radius="sm" fullWidth outlined>Full width</Button>
        <Button color="alert" radius="xl" fullWidth>Full width</Button>

        <Button color="orange" radius="xl" fullWidth>Full width</Button>
        <Button color="violet" radius="xl" fullWidth outlined>Full width</Button>
      </FlexGroup>
    </MainContainer>

    {/* Big Button */}

    <MainContainer css={{ margin: '0 0 4rem 0' }}>
      <FlexGroup gap="1.5rem" css={{ justifyContent: 'space-between' }}>
        <Button size="xl" radius="sm">Button XL</Button>
        <Button size="xl" radius="sm" outlined>Button XL</Button>

        <Button size="xl" color="alert" radius="sm" outlined>Button XL</Button>
        <Button size="xl" color="alert" radius="xl">Button XL</Button>

        <Button size="xl" color="orange" radius="xl">Button XL</Button>
        <Button size="xl" color="violet" radius="xl" outlined>Button XL</Button>
      </FlexGroup>
    </MainContainer>

    {/* Pilled Button */}

    <MainContainer css={{ margin: '0 0 4rem 0' }}>
      <FlexGroup gap="1.5rem" css={{ justifyContent: 'space-between' }}>
        <Button size="xl" radius="sm" pilled disabled>Disabled XL</Button>
        <Button size="xl" radius="sm" outlined pilled disabled>Disabled XL</Button>

        <Button size="xl" color="alert" radius="sm" outlined pilled disabled>Disabled XL</Button>
        <Button size="xl" color="alert" radius="xl" pilled disabled>Disabled XL</Button>

        <Button size="xl" color="orange" radius="xl" pilled disabled>Disabled XL</Button>
        <Button size="xl" color="violet" radius="xl" outlined pilled disabled>Disabled XL</Button>
      </FlexGroup>
    </MainContainer>

    {/* Circle Button */}

    <MainContainer css={{ margin: '0 0 4rem 0' }}>
      <FlexGroup gap="1.5rem" css={{ justifyContent: 'space-between' }}>
        <CircleButton circle="xl" color="green">Circle XL</CircleButton>
        <CircleButton circle="lg" color="violet" outlined>Circle lg</CircleButton>
        <CircleButton circle="md" color="alert">md</CircleButton>
        <CircleButton circle="sm" color="alert" outlined>sm</CircleButton>
        <CircleButton circle="xs">xs</CircleButton>
      </FlexGroup>
    </MainContainer>

    {/* Avatar Button */}

    <MainContainer css={{ margin: '0 0 4rem 0' }}>
      <FlexGroup gap="1.5rem" css={{ justifyContent: 'space-between' }}>
        <AvatarButton circle="md" color="violet">
          <IconeUser />
        </AvatarButton>

        <AvatarButton circle="md" color="green">
          <IconeUser />
        </AvatarButton>

        <AvatarButton circle="md" color="orange">
          <IconeUser />
        </AvatarButton>

      </FlexGroup>
    </MainContainer>
  </Section>
);

export default HomeButton;
