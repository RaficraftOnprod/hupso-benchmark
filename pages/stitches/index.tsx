import { Header } from "../../core/components/stitches/Organisms/Header/Header";
import { HeroBanner } from "../../core/components/stitches/Organisms/HeroBanner/HeroBanner";
import MainContainer from "../../core/components/stitches/Atoms/MainContainer/MainContainer";

export default function HomeStitches() {
  return (
    <>
      <MainContainer>
        <Header />
      </MainContainer>
      <MainContainer>
        <HeroBanner />
      </MainContainer>
    </>
  )
}