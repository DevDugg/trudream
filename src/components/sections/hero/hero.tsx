import Container from "../../layout/container";
import HeroForm from "./hero-form";
import Image from "next/image";
import RichText from "../../../../sanity/lib/rich-text";
import { general } from "@/config/general";
import { getHeroSectionData } from "../../../../sanity/schemas/hero";
import { heroPayData } from "@/data/hero.data";
import { urlForImage } from "../../../../sanity/lib/image";

// IMPORTANT: This must be a server component

// !!!!!!!!!!!!!!!! ASYNC COMPONENT SHOULD BE A SERVER COMPONENT !!!!!!!!!!!!!!!!

const Hero = async () => {
  const heroSectionData = await getHeroSectionData(); // use the created function for getting hero section data

  return (
    <section id="hero" className="hero bg-HERO_PATTERN pt-[133px] sm:pt-[121px] lg:pt-[153px]">
      <Container className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-10 sm:gap-8">
        <div className="flex flex-col gap-4 sm:text-center xl:text-left xl:max-w-[690px]">
          <h1 className="text-[32px] sm:text-[40px] lg:text-[80px] font-bold leading-none xl:mb-10">
            {heroSectionData[0].title}
          </h1>
          <RichText className="text-BLACK text-base sm:text-[18px] lg:text-[20px] xl:max-w-[590px] leading-[140%] xl:mb-20">
            {heroSectionData[0].subtitle}
          </RichText>

          <div className="hidden xl:block">
            <h4 className="h4 mb-4">Invested in</h4>
            <div className="flex gap-5">
              {heroSectionData[0].icons.map((icon) => (
                // use urlForImage function to get image url
                <Image key={icon.name} src={urlForImage(icon.image)} alt={icon.name} width={40} height={40} />
              ))}
            </div>
          </div>
        </div>

        <div className="flex-[0_0_40%]">
          <HeroForm />

          <div className="flex flex-col xl:hidden sm:items-center gap-4 sm:gap-6">
            <h4 className="h4">Invested in</h4>
            <div className="flex gap-5">
              {heroSectionData[0].icons.map((icon) => (
                // use urlForImage function to get image url
                <Image key={icon.name} src={urlForImage(icon.image)} alt={icon.name} width={40} height={40} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Hero;
