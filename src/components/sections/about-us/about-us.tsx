import AboutCard from "./about-card";
import { Button } from "@/components/ui/button";
import Container from "@/components/layout/container";
import RichText from "../../../../sanity/lib/rich-text";
import { getAboutSectionData } from "../../../../sanity/schemas/about";

const AboutUs = async () => {
  const aboutSectionData = await getAboutSectionData();

  console.log("first");

  return (
    <section id="about">
      <Container>
        <div className="flex flex-col lg:flex-row lg:justify-between gap-4 mb-10 lg:mb-12">
          <h3 className="h3 lg:max-w-[600px] lg:flex-[0_1_610px]">
            {aboutSectionData[0].title}
          </h3>

          <div className="lg:flex-[0_1_480px]">
            <RichText className="p lg:mb-8">
              {aboutSectionData[0].subtitle}
            </RichText>
            <Button className="hidden lg:block px-10 text-[18px] font-medium mb-10">
              Browse our services
            </Button>
          </div>
        </div>
        <Button className="w-full lg:hidden text-[18px] font-medium mb-10">
          Browse our services
        </Button>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 sm:gap-6">
          {aboutSectionData[0].cards.map((item, i) => (
            <AboutCard key={i} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
