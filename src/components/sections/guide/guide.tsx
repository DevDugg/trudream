import Container from '@/components/layout/container';
import { guideData } from '@/data/guide.data';
import Image from 'next/image';

const Guide = () => {
  return (
    <section>
      <Container>
        <h3 className="h3 mb-10">A Step-by-Step Guide to TruDream</h3>
        <Image src={'/images/guide/1.png'} alt="image" width={400} height={450} className="mb-6" />

        <div className="flex flex-col gap-6">
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
