import Container from '@/components/layout/container';
import { guideData } from '@/data/guide.data';
import Image from 'next/image';

const Guide = () => {
  return (
    <section>
      <Container>
        <h3 className="h3 mb-10 sm:text-center lg:text-left max-w-[610px]">
          A Step-by-Step Guide to TruDream
        </h3>

        <div className="flex flex-col lg:flex-row lg:items-center flex-[1_0_50%] lg:justify-between gap-20">
          <Image
            src={'/images/guide/3.png'}
            alt="image"
            width={1000}
            height={1000}
            className="mb-6 sm:mb-8 lg:mb-0 overflow-hidden h-[380px] sm:h-[400px] lg:h-[650px] w-full object-cover object-center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 lg:gap-10 flex-[1_0_50%]">
            {guideData.map((item) => (
              <div key={item.title} className="flex flex-col gap-4">
                <h4 className="text-ACCENT text-[18px] lg:text-[24px] font-bold leading-none">
                  {item.title}
                </h4>
                <p className="p">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Guide;
