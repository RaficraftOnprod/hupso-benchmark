import { HeroBanners } from './style';
import { IconeStar, IconeStarTrustPilot } from '../../../../assets/svg/icones';
import Button from '../../Atoms/Button/Button';
import { H1 } from '../../ui/Text';

export function HeroBanner() {
  return (
    <HeroBanners>
      <div className="hero_bloc">
        <div className="text">
          <H1> On ne naît pas utile, on l'apprend</H1>
          <p>
            Hupso vous forme aux métiers de demain. Nous
            revalorisons les métiers indispensables grâce à la formation professionelle.
          </p>
        </div>
        <div className="button_group">
          <Button color="orange" radius="xl" size="xl">
            Nous contacter
          </Button>
          <Button color="orange" radius="xl" size="xl" outlined>
            Découvrir les secteurs
          </Button>
        </div>
        <div>
          <div>
            <IconeStarTrustPilot />
            <IconeStarTrustPilot />
            <IconeStarTrustPilot />
            <IconeStarTrustPilot />
            <IconeStarTrustPilot />
          </div>
          <IconeStar />
          <p>Trustpilot</p>
        </div>
      </div>
    </HeroBanners>
  );
}
