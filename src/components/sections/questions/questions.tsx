'use client';

import { motion } from 'framer-motion';

import Container from '@/components/layout/container';
import Image from 'next/image';
import { colors } from '@/config/colors';
import { questionsData } from '@/data/questions.data';
import { useState } from 'react';

const Questions = () => {
  const [activeFAQ, setActiveFAQ] = useState(0);

  return (
    <section>
      <Container>
        <h3 className="h3 text-center -tracking-[1%] mb-12 sm:mb-10 ">Have any questions?</h3>

        <div className="flex flex-col gap-6">
          {questionsData.map((item, i) => (
            <motion.div
              initial={{ borderColor: colors.GRAY }}
              animate={{ borderColor: i === activeFAQ ? `${colors.GRAY}00` : colors.GRAY }}
              onClick={() => setActiveFAQ(i)}
              key={item.title}
              className={
                'flex flex-col text-BLACK rounded-[16px] cursor-pointer border bg-LIGHT_GRAY font-semibold leading-[120%] py-[18.5px] px-4'
              }>
              <div className="flex items-center gap-6 justify-between">
                <motion.h4
                  initial={{ color: colors.BLACK }}
                  animate={i === activeFAQ ? { color: colors.ACCENT } : {}}>
                  {item.title}
                </motion.h4>
                <div className="relative size-6">
                  <motion.div
                    className="top-0 right-0 size-6 absolute"
                    initial={{ opacity: 1 }}
                    animate={i === activeFAQ ? { opacity: 0 } : {}}>
                    <Image src={`/images/plus.svg`} alt="plus" width={24} height={24} />
                  </motion.div>
                  <motion.div
                    className="top-0 right-0 size-6 absolute"
                    initial={{ opacity: 0 }}
                    animate={i === activeFAQ ? { opacity: 1 } : {}}>
                    <Image src={`/images/minus.svg`} alt="minus" width={24} height={24} />
                  </motion.div>
                </div>
              </div>

              <motion.div
                key="content"
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={
                  i === activeFAQ ? { opacity: 1, height: 'fit-content', marginTop: 16 } : {}
                }
                className="overflow-hidden">
                <p className="text-[16px] leading-[140%] font-normal">{item.text}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Questions;
