import Image from 'next/image';
import Container from '../../layout/container';
import HeroForm from './hero-form';
import { general } from '@/config/general';
import { heroPayData } from '@/data/hero.data';

const Hero = () => {
  return (
    <section className="hero bg-HERO_PATTERN">
      <Container className="flex flex-col gap-10 sm:gap-8">
        <div className="flex flex-col gap-4 sm:text-center">
          <h1 className="text-[32px] sm:text-[40px] font-bold leading-none">
            {general.appDescription}
          </h1>
          <p className="text-BLACK text-base sm:text-[18px]">
            We empowers business owners like you to turn dreams into reality. We provide funding and
            financial literacy education to help you launch, scale, or invest in your business
            goals.
          </p>
        </div>

        <HeroForm />

        <div className="flex flex-col sm:items-center gap-4 sm:gap-6">
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
      </Container>
    </section>
  );
};
export default Hero;
