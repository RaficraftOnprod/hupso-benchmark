import { Header } from "../../core/components/stitches/Organisms/Header/Header";
import { HeroBanner } from "../../core/components/stitches/Organisms/HeroBanner/HeroBanner";
import { MainSection } from "../../core/components/stitches/Templates/MainContainer/style";

export default function HomeStitches() {
  return (
    <>
      <MainSection>
        <Header />
      </MainSection>
      <MainSection>
        <HeroBanner />
      </MainSection>
    </>
  )
}