import { styled } from '@stitches/react';

import FlexGroup from '@core/components/Stitches/UI/Atoms/FlexGroup/FlexGroup';
import MainContainer from '@core/components/Stitches/UI/Atoms/MainContainer/MainContainer';
import {
  H1, H2, H3, H4, Text, Href,
} from '@core/components/Stitches/UI/Atoms/Text/Text';

const Box = styled('div');
const Section = styled('section');
const Input = styled('input');

const HomeText = () => (
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

    <MainContainer css={{ margin: '0 0 4rem 0' }}>
      <div>
        <H1>H1 Title Default line height 1.5</H1>
        <H2>H2 Title Default line height 1.5</H2>
        <H3>H3 Title Default line height 1.5</H3>
        <H4>H4 Title Default line height 1.5</H4>
      </div>
    </MainContainer>

    <MainContainer css={{
      margin: '0 0 4rem 0',
      backgroundColor: '$orange100',
      padding: '4rem 0',
    }}
    >
      <Box>
        <Box css={{
          maxWidth: '70%',
          width: '100%',
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '$borderRadius$xl',
        }}
        >
          <H1 fontSize="xl" lineHeight={2}>H1 Title XL With lineHeight to 1.2</H1>
          <Box css={{ margin: '2rem' }} />
          <H1 spacing="5">H1 Title spacing 5px</H1>
          <H2 color="alert" weight={700}>Alert Title h2 bold 700</H2>
          <H2 color="info" weight={700} italic>Info Title h2 bold 700 and italic</H2>
        </Box>
      </Box>

    </MainContainer>

    <MainContainer css={{ margin: '0 0 4rem 0' }}>
      <Box>
        <Box css={{
          maxWidth: '70%',
          width: '100%',
          backgroundColor: 'black',
          padding: '2rem',
        }}
        >
          <Text color="white">
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
            Nulla vehicula imperdiet tortor,
            sed imperdiet ligula vehicula in. Phasellus diam quam,
            iaculis nec metus ac, auctor hendrerit turpis.
            Curabitur scelerisque tincidunt porta. Donec tortor ante,
            ornare nec justo id, aliquet sodales lacus. Morbi a ultrices enim.
            Maecenas eu quam vitae justo rutrum aliquam sit amet nec dui. In hac
            habitasse platea dictumst. Ut sagittis vitae diam et ullamcorper.
            In sed lectus ac massa finibus tempus nec quis neque. Quisque vel ligula urna.
            Praesent eget tellus sit amet felis facilisis ullamcorper vitae ac enim. In hac
            habitasse platea dictumst. Suspendisse dignissim arcu vitae nibh vulputate ultricies.
          </Text>
        </Box>
      </Box>
    </MainContainer>

  </Section>
);

export default HomeText;
