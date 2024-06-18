import Container from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { aboutData } from '@/data/about-us.data';
import Image from 'next/image';

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
            <div key={item.title} className="p-6 sm:py-4 bg-LIGHT_GRAY rounded-[16px]">
              <div className="flex items-center gap-4 mb-3">
                <Image src={`/images/about/${item.img}.svg`} alt="icon" width={32} height={32} />
                <h4 className="text-ACCENT leading-none text-[20px] font-semibold">{item.title}</h4>
              </div>

              <p className="text-BLACK leading-[140%] text-[18px]">{item.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
