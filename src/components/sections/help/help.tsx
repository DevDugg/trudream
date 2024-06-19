import Container from '@/components/layout/container';
import HeroForm from '../hero/hero-form';

const Help = () => {
  return (
    <section className="w-full sm:bg-none">
      <Container className="bg-HELP_PATTERN bg-no-repeat bg-cover py-10 px-10 flex flex-col xl:flex-row xl:justify-between xl:items-center gap-10 xl:gap-20 sm:bg-HELP_PATTERN">
        <div className="">
          <h3 className="h3 mb-4 xl:mb-10">
            Need some help to build solutions that drive changes?
          </h3>
          <p className="p lg:text-[20px]">
            We empowers business owners like you to turn dreams into reality. We provide funding and
            financial literacy education to help you launch, scale, or invest in your business
            goals.
          </p>
        </div>

        <div className="flex-shrink-0">
          <HeroForm />
        </div>
      </Container>
    </section>
  );
};

export default Help;
