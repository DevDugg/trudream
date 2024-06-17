import Container from '@/components/layout/container';
import HeroForm from '../hero/hero-form';

const Help = () => {
  return (
    <section className="bg-HELP_PATTERN">
      <Container className="py-10 flex flex-col gap-10">
        <div>
          <h3 className="h3 mb-4">Need some help to build solutions that drive changes?</h3>
          <p className="p">
            We empowers business owners like you to turn dreams into reality. We provide funding and
            financial literacy education to help you launch, scale, or invest in your business
            goals.
          </p>
        </div>

        <HeroForm />
      </Container>
    </section>
  );
};

export default Help;
