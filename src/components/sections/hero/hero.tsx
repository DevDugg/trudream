import Container from "../../layout/container";
import { general } from "@/config/general";

const Hero = () => {
  return (
    <section className="hero bg-HERO_PATTERN">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-[32px] font-bold leading-none">{general.appDescription}</h1>
          <p className="text-BLACK text-base">
            We empowers business owners like you to turn dreams into reality. We provide funding and financial literacy
            education to help you launch, scale, or invest in your business goals.
          </p>
        </div>
      </Container>
    </section>
  );
};
export default Hero;
