import { Hero } from "@/components/Hero";
import { FeaturedCookies } from "@/components/FeaturedCookies";
import { HowItWorks } from "@/components/HowItWorks";
import { AboutPreview } from "@/components/AboutPreview";
import { SeasonalCombos } from "@/components/SeasonalCombos";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedCookies />
      <HowItWorks />
      <AboutPreview />
      <SeasonalCombos />
    </>
  );
}
