import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../../Atoms/Button/Button";
import Navigation from "../../Atoms/Navigation/Navigation";
import Divider from "../../ui/Divider";
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
      <div className="navigation">
        <Navigation />
        <Divider />
        <Link href='tel: +33 6 06 06 06 06'>
          +33 06 06 06 06 06
        </Link>
        <Button size="xl" radius="xl" color="orange">
          Nous contacter
        </Button>
      </div>
    </HeaderTop>
  )
}