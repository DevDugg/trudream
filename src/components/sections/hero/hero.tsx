import Image from 'next/image';
import Container from '../../layout/container';
import HeroForm from './hero-form';
import { general } from '@/config/general';
import { heroPayData } from '@/data/hero.data';

const Hero = () => {
  return (
    <section className="hero bg-HERO_PATTERN">
      <Container className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-10 sm:gap-8">
        <div className="flex flex-col gap-4 sm:text-center xl:text-left xl:max-w-[690px]">
          <h1 className="text-[32px] sm:text-[40px] lg:text-[80px] font-bold leading-none xl:mb-10">
            {general.appDescription}
          </h1>
          <p className="text-BLACK text-base sm:text-[18px] lg:text-[20px] xl:max-w-[590px] leading-[140%] xl:mb-20">
            We empowers business owners like you to turn dreams into reality. We provide funding and
            financial literacy education to help you launch, scale, or invest in your business
            goals.
          </p>

          <div className="hidden xl:block">
            <h4 className="h4 mb-4">Invested in</h4>
            <div className="flex gap-5">
              {heroPayData.map((item) => (
                <Image
                  key={item.path}
                  src={`/images/hero/${item.path}.svg`}
                  alt="icon"
                  width={40}
                  height={40}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex-[0_0_40%]">
          <HeroForm />

          <div className="flex flex-col xl:hidden sm:items-center gap-4 sm:gap-6">
            <h4 className="h4">Invested in</h4>
            <div className="flex gap-5">
              {heroPayData.map((item) => (
                <Image
                  key={item.path}
                  src={`/images/hero/${item.path}.svg`}
                  alt="icon"
                  width={40}
                  height={40}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Hero;
