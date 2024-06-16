import Container from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { aboutData } from '@/data/about-us.data';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col gap-3 mb-10">
          <h2 className="text-[24px] leading-none font-bold">
            Turning Dreams into Reality, One Step at a Time
          </h2>

          <p className="leading-[140%] text-BLACK">
            We understand the frustration of feeling stuck. Traditional loans can be rigid and out
            of reach, leaving you discouraged. That's why we offer a unique approach that tackles
            your financial challenges from two angles:
          </p>
        </div>
        <Button className="w-full text-[18px] font-medium mb-10">Browse our services</Button>

        <div className="flex flex-col gap-10">
          {aboutData.map((item) => (
            <div key={item.title} className="p-6 bg-LIGHT_GRAY rounded-[16px]">
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
