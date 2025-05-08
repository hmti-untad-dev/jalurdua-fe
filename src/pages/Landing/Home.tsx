import LandingWrapper from "@/layout/landing/LandingWrapper";
import LandingHero from "./sections/LandingHero";
import LandingFAQ from "./sections/LandingFAQ";
import LandingDocumentation from "./sections/LandingDocumentation";
import LandingAchievement from "./sections/LandingAchievement";
import LandingAbout from "./sections/LandingAbout";
import LandingOrganization from "./sections/LandingOrganization";

export default function Home() {
  return (
    <>
      <LandingHero />
      <LandingWrapper>
        <LandingAbout />
        <LandingOrganization />

        <LandingAchievement />
        <LandingDocumentation />
        <LandingFAQ />
      </LandingWrapper>
    </>
  );
}
