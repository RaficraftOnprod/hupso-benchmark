import Button from '@core/components/stitches/Atoms/Button/Button';
import MainContainer from '@core/components/stitches/Atoms/MainContainer/MainContainer';
import Puzzle from '@core/components/stitches/Atoms/Puzzle/Puzzle';
import { Header } from '@core/components/stitches/Organisms/Header/Header';
import { HeroBanner } from '@core/components/stitches/Organisms/HeroBanner/HeroBanner';
import Custom from '@core/components/stitches/ui/Custom';
import FlexGroup from '@core/components/stitches/ui/FlexGroup';
import Text from '@core/components/stitches/ui/Text';

export default function HomeStitches() {
  return (
    <>
      {/* Header */}

      <MainContainer>
        <Header />
      </MainContainer>

      {/* Hero Banner */}

      <MainContainer>
        <HeroBanner />
      </MainContainer>

      {/* Second Section Hupso Story */}

      <MainContainer color="$violet500">
        <FlexGroup
          justifyContent="center"
          gap="5rem"
          css={{
            maxWidth: '50%',
            paddingTop: '9.5rem',
            paddingBottom: '4.5rem',
          }}
        >
          <FlexGroup
            direction="column"
            alignItems="flex-start"
            gap="2.725rem"
            css={{
              maxWidth: '30%',
              flex: '1',
              height: '100%',
              alignSelf: 'flex-start',
            }}
          >
            <Text
              tag="h2"
              color="white"
              fontSize="2.25rem"
              fontWeight={900}
              lineHeight={1.2}
            >
              Hupso, acteur de votre changement de vie
            </Text>
            <Button color="green" radius="xl" size="xl">
              Découvrez notre histoire
            </Button>
          </FlexGroup>
          <FlexGroup
            direction="column"
            gap="2rem"
            css={{ maxWidth: '34%' }}
          >
            <Text
              color="white"
              fontSize="13px"
              lineHeight={1.5}
              fontWeight={300}
            >
              Chez Hupso, on clame haut et fort qu'il n'y a pas de sous métier ou de
              sot métier. Qu'on n'a pas besoin d'avoir fait de longues études pour exercer un
              métier essentiel.(Bien au contraire!)
            </Text>
            <Text
              color="white"
              fontSize="13px"
              lineHeight={1.5}
              fontWeight={300}
            >
              On est convaincu que chaque travailleur est important et que chacun apporte
              sa pierre à cet édifice qu'est notre société.
            </Text>
            <Text
              color="white"
              fontSize="13px"
              lineHeight={1.5}
              fontWeight={300}
            >
              <>
                C'est pour cela qu'on forme chaque année plus de 2 000 personnes à devenir
                chef de chantier, secrétaire, carrossier, infirmier, télévendeur, ou encore
                gendarme.
              </>
              <br />
              <>
                Parce que sans eux, rien ne serait possible.
              </>
            </Text>
          </FlexGroup>
        </FlexGroup>
      </MainContainer>

      {/* Puzzle Green */}

      <MainContainer color="$violet500" css={{ position: 'relative', width: '100%', height: '6rem' }}>
        <Custom
          tag="div"
          css={{
            position: 'relative',
            content: ' ',
            backgroundColor: '$violet500',
            height: '6rem',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Puzzle width="270px" height="100%" color="$green300" radius="1rem" />
        </Custom>
      </MainContainer>

      {/* Statistique */}

      <MainContainer color="$green300" css={{ position: 'relative', width: '100%', height: '12rem' }} />
    </>
  );
}
