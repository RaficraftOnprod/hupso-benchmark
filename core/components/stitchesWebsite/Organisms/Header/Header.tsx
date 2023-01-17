import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Navigation from '@core/components/stitchesWebsite/Molecules/Navigation/Navigation';
import Button from '@core/components/stitchesWebsite/Atoms/Button/Button';
import Divider from '@core/components/stitchesWebsite/ui/Divider';

import HeaderTop from './style';

export function Header() {
  return (
    <HeaderTop>
      <Image
        src="/assets/img/logo.png"
        width={134}
        height={45}
        alt="Hupso apprendre autrement"
      />
      <div className="navigation">
        <Navigation />
        <Divider />
        <Link href="tel: +33 6 06 06 06 06">
          +33 06 06 06 06 06
        </Link>
        <Button size="xl" radius="xl" color="orange">
          Nous contacter
        </Button>
      </div>
    </HeaderTop>
  );
}
