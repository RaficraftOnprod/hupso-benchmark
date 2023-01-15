import Button from '@stitchesUI/Atoms/Button/Button';
import FlexGroup from '@stitchesUI/ui/FlexGroup';
import Text from '@stitchesUI/ui/Text';

import { HeroBanners } from './style';
import TrustPilot from './Truspilot';

export function HeroBanner() {
  return (
    <HeroBanners>
      <div className="hero_bloc">
        <FlexGroup gap="1.5rem" direction="column" alignItems="flex-start">
          <Text tag="h1" size={6} css={{ maxWidth: '83%' }}>
            On ne naît pas utile, on l'apprend
          </Text>
          <Text color="gray" css={{ maxWidth: '53%' }}>
            Hupso vous forme aux métiers de demain. Nous
            revalorisons les métiers indispensables grâce à la formation professionelle.
          </Text>
        </FlexGroup>
        <FlexGroup gap="1.5rem">
          <Button color="orange" radius="xl" size="xl">
            Nous contacter
          </Button>
          <Button color="orange" radius="xl" size="xl" outlined>
            Découvrir les secteurs
          </Button>
        </FlexGroup>
        <TrustPilot />
      </div>
    </HeroBanners>
  );
}
