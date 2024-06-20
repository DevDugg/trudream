import { Button } from "@/components/ui/button";
import Container from "@/components/layout/container";
import Image from "next/image";
import { businessData } from "@/data/business.data";
import HoverItems from "./hover-items";

const Business = () => {
  return (
    <section id="services">
      <Container className="pb-[330px]">
        <div className="flex lg:hidden flex-col gap-10">
          <h3 className="h3 sm:text-center">
            Funding Solutions & Financial Education by TruDream
          </h3>

          <div className="flex flex-col gap-10 sm:gap-8">
            {businessData.map((item, i) => (
              <div key={i}>
                <h2 className="text-[32px] font-bold leading-none text-BLACK mb-6">
                  {item.title}
                </h2>
                <Image
                  src={`/images/business/${item.img}.png`}
                  alt="image"
                  width={1100}
                  height={800}
                  className="mb-3"
                />
                <p className="leading-[140%] text-BLACK">{item.text}</p>
              </div>
            ))}
          </div>

          <Button className="text-[18px] font-medium">Book a call</Button>
        </div>

        {/* DESKTOP */}

        <div className="hidden lg:block">
          <h3 className="h3 sm:text-center lg:text-left max-w-[610px] mb-10">
            Funding Solutions & Financial Education by TruDream
          </h3>

          <HoverItems />
        </div>
      </Container>
    </section>
  );
};

export default Business;
