import { Hero } from "@/components/Hero";
import { FeaturedCookies } from "@/components/FeaturedCookies";
import { HowItWorks } from "@/components/HowItWorks";
import { AboutPreview } from "@/components/AboutPreview";
import { SeasonalCombos } from "@/components/SeasonalCombos";
import { FadeInSection } from "@/components/FadeInSection";

export default function Home() {
  return (
    <>
      <Hero />
      <FadeInSection>
        <FeaturedCookies />
      </FadeInSection>
      <FadeInSection>
        <HowItWorks />
      </FadeInSection>
      <FadeInSection>
        <AboutPreview />
      </FadeInSection>
      <FadeInSection>
        <SeasonalCombos />
      </FadeInSection>
    </>
  );
}
