import Container from "@/components/layout/container";
import GuideCard from "./guide-card";
import Image from "next/image";
import { guideData } from "@/data/guide.data";
import { getGuideSectionData } from "../../../../sanity/schemas/guide";
import { urlForImage } from "../../../../sanity/lib/image";

const Guide = async () => {
  const guideSectionData = await getGuideSectionData();

  return (
    <section id="how-it-works">
      <Container>
        <h3 className="h3 mb-10 sm:text-center lg:text-left max-w-[610px]">
          {guideSectionData[0].title}
        </h3>

        <div className="flex flex-col lg:flex-row lg:items-center flex-[1_0_50%] lg:justify-between gap-20">
          <Image
            src={urlForImage(guideSectionData[0].image)}
            alt="image"
            width={610}
            height={650}
            className="mb-6 sm:mb-8 lg:mb-0 overflow-hidden h-[380px] sm:h-[400px] lg:h-[650px] object-cover object-center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 lg:gap-10 flex-[1_0_50%]">
            {guideSectionData[0].cards.map((item, i) => (
              <GuideCard key={i} {...item} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Guide;
