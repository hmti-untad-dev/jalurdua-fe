import LandingWrapper from "@/layout/landing/LandingWrapper";
import LandingHero from "./sections/LandingHero";
import LandingFAQ from "./sections/LandingFAQ";
import LandingDocumentation from "./sections/LandingDocumentation";
import LandingAchievement from "./sections/LandingAchievement";
import LandingAbout from "./sections/LandingAbout";

export default function Home() {
  return (
    <>
      <LandingHero />
      <LandingWrapper>
        <LandingAbout />
        <LandingAchievement />
        <LandingDocumentation />
        <LandingFAQ />
      </LandingWrapper>
    </>
  );
}
