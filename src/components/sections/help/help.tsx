import Container from "@/components/layout/container";
import HeroForm from "../hero/hero-form";
import RichText from "../../../../sanity/lib/rich-text";
import { getHelpSectionData } from "../../../../sanity/schemas/help";

const Help = async () => {
  const helpSectionData = await getHelpSectionData();

  return (
    <section id="contact" className="w-full sm:bg-none">
      <Container className="bg-HELP_PATTERN bg-no-repeat bg-cover py-10 px-10 flex flex-col xl:flex-row xl:justify-between xl:items-center gap-10 xl:gap-20 sm:bg-HELP_PATTERN">
        <div className="">
          <h3 className="h3 mb-4 xl:mb-10">{helpSectionData[0].title}</h3>
          <RichText className="p lg:text-[20px]">
            {helpSectionData[0].subtitle}
          </RichText>
        </div>

        <div className="flex-shrink-0">
          <HeroForm />
        </div>
      </Container>
    </section>
  );
};

export default Help;
