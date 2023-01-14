import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IconeUser } from "../../../../assets/svg/icones";
import Button from "../../Atoms/Button/Button";
import { Buttons } from "../../Atoms/Button/style";
import Navigation from "../../Atoms/Navigation/Navigation";
import HeaderTop from "./style";

export function Header() {
  return (
    <HeaderTop>
      <Image
        src="/assets/img/logo.png"
        width={134}
        height={45}
        alt="Hupso apprendre autrement"
      />
      <Navigation />
      <Button size="xl" radius="xl" variant="primary" disabled>
        Nous contacter
      </Button>
    </HeaderTop>
  )
}