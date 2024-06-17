import Image from 'next/image';
import Container from '@/components/layout/container';
import { reviewsData } from '@/data/reviews.data';
import clsx from 'clsx';

const Reviews = () => {
  return (
    <section>
      <Container>
        <h3 className="h3 -tracking-[1%] mb-10 text-center">What clients say about us</h3>

        <div className="flex flex-col sm:flex-row flex-nowrap sm:flex-wrap items-center justify-center gap-6">
          {reviewsData.map((item) => (
            <div
              key={item.name}
              className={clsx('p-4 bg-LIGHT_GRAY rounded-[24px] w-full max-w-[410px]')}>
              <div className="flex flex-col gap-1 mb-3">
                <h5 className="text-[18px] leading-none font-bold text-BLACK -tracking-[1%]">
                  {item.name}
                </h5>
                <div className="text-[14px] leading-none text-BLACK">{item.email}</div>
              </div>

              <div className="flex items-center gap-1 mb-6">
                {item.stars.map((_, i) => (
                  <Image
                    key={i}
                    src={'/images/reviews/star.svg'}
                    alt="star"
                    width={16}
                    height={16}
                  />
                ))}
              </div>

              <p className="p">{item.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Reviews;
