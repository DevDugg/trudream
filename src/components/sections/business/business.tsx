'use client';

import { Button } from '@/components/ui/button';
import Container from '@/components/layout/container';
import Image from 'next/image';
import { businessData } from '@/data/business.data';
import clsx from 'clsx';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { colors } from '@/config/colors';

const Business = () => {
  const [hoverItem, setHoverItem] = useState(0);

  return (
    <section>
      <Container>
        <div className="flex lg:hidden flex-col gap-10">
          <h3 className="h3 sm:text-center">Funding Solutions & Financial Education by TruDream</h3>

          <div className="flex flex-col gap-10 sm:gap-8">
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

        {/* DESKTOP */}

        <div className="hidden lg:block">
          <h3 className="h3 sm:text-center lg:text-left max-w-[610px] mb-10">
            Funding Solutions & Financial Education by TruDream
          </h3>

          <div className="flex justify-between">
            <motion.div
              initial={{ top: 0, opacity: 0 }}
              animate={{
                top: hoverItem * 128,
                opacity: 1,
              }}
              className="flex-[0_0_300px] top-0 relative xl:mx-auto">
              <div className="absolute">
                <Image
                  src={`/images/business/${businessData[hoverItem].img}.png`}
                  alt="plus"
                  width={300}
                  height={170}
                />
                <p className="p mt-4 mb-6">{businessData[hoverItem].text}</p>
                <Button className="w-full font-medium">Book a call</Button>
              </div>
            </motion.div>

            <div className="flex flex-col flex-[0_1_50%]">
              {businessData.map((item, i) => (
                <motion.div
                  initial={{
                    backgroundColor: `${colors.LIGHT_GRAY}00`,
                    paddingLeft: 0,

                    color: colors.GRAY,
                  }}
                  animate={
                    i === hoverItem
                      ? {
                          backgroundColor: colors.LIGHT_GRAY,
                          paddingLeft: '24px',
                          color: colors.ACCENT,
                        }
                      : {}
                  }
                  key={i}
                  onMouseMove={() => setHoverItem(i)}
                  className="!py-10 text-[48px] font-bold leading-none !pr-6 rounded-2xl">
                  {item.title}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Business;
