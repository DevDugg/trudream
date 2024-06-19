import Container from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { aboutData } from '@/data/about-us.data';
import Image from 'next/image';
import AboutCarf from './about-card';
import AboutCard from './about-card';

const AboutUs = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col lg:flex-row lg:justify-between gap-4 mb-10 lg:mb-12">
          <h3 className="h3 lg:max-w-[600px] lg:flex-[0_1_610px]">
            Turning Dreams into Reality, One Step at a Time
          </h3>

          <div className="lg:flex-[0_1_480px]">
            <p className="p lg:mb-8">
              We understand the frustration of feeling stuck. Traditional loans can be rigid and out
              of reach, leaving you discouraged. That's why we offer a unique approach that tackles
              your financial challenges from two angles:
            </p>
            <Button className="hidden lg:block px-10 text-[18px] font-medium mb-10">
              Browse our services
            </Button>
          </div>
        </div>
        <Button className="w-full lg:hidden text-[18px] font-medium mb-10">
          Browse our services
        </Button>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 sm:gap-6">
          {aboutData.map((item) => (
            <AboutCard key={item.title} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
