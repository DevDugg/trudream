import { Button } from '@/components/ui/button';
import Container from '@/components/layout/container';
import Image from 'next/image';
import { businessData } from '@/data/business.data';

const Business = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col gap-20">
          <h3 className="h3">Funding Solutions & Financial Education by TruDream</h3>

          <div className="flex flex-col gap-10">
            {businessData.map((item, i) => (
              <div key={i}>
                <h2 className="text-[32px] font-bold leading-none text-BLACK mb-6">{item.title}</h2>
                <Image
                  src={`/images/business/${item.img}.png`}
                  alt="image"
                  width={1100}
                  height={800}
                  className="mb-3"
                />
                <p className="leading-[140%] text-BLACK">{item.text}</p>
              </div>
            ))}
          </div>

          <Button className="text-[18px] font-medium">Book a call</Button>
        </div>
      </Container>
    </section>
  );
};

export default Business;
