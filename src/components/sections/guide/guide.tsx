import Container from '@/components/layout/container';
import { guideData } from '@/data/guide.data';
import Image from 'next/image';

const Guide = () => {
  return (
    <section>
      <Container>
        <h3 className="h3 mb-10 sm:text-center">A Step-by-Step Guide to TruDream</h3>
        <Image
          src={'/images/guide/3.png'}
          alt="image"
          width={1000}
          height={1000}
          className="mb-6 sm:mb-8 overflow-hidden h-[380px] sm:h-[400px] w-full object-cover"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {guideData.map((item) => (
            <div key={item.title} className="flex flex-col gap-4">
              <h4 className="text-ACCENT text-[18px] font-bold leading-none">{item.title}</h4>
              <p className="p">{item.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Guide;
