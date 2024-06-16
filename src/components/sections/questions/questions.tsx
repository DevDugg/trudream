'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Container from '@/components/layout/container';
import { questionsData } from '@/data/questions.data';
import Image from 'next/image';
import { useState } from 'react';
import clsx from 'clsx';

const Questions = () => {
  const [activeFAQ, setActiveFAQ] = useState('');

  const onFAQ = (name: string) => {
    if (name === activeFAQ) {
      setActiveFAQ('');
    } else {
      setActiveFAQ(name);
    }
  };

  return (
    <section>
      <Container>
        <h3 className="h3 text-center -tracking-[1%] mb-12">Have any questions?</h3>

        <div className="flex flex-col gap-6">
          {questionsData.map((item) => (
            <motion.div
              onClick={() => onFAQ(item.title)}
              key={item.title}
              className={clsx(
                'flex flex-col text-BLACK transition-all rounded-[16px] cursor-pointer bg-LIGHT_GRAY border-GRAY border-[1px] font-semibold leading-[120%] py-[18.5px] px-4',
                {
                  'border-none': activeFAQ === item.title,
                },
              )}>
              <div className="flex items-center gap-6 justify-between">
                <h4
                  className={clsx({
                    'text-ACCENT': activeFAQ === item.title,
                  })}>
                  {item.title}
                </h4>
                <Image
                  src={`/images/${activeFAQ === item.title ? 'minus' : 'plus'}.svg`}
                  alt="plus"
                  width={24}
                  height={24}
                />
              </div>

              <AnimatePresence>
                {activeFAQ === item.title && (
                  <motion.p className="mt-6 text-[16px] leading-[140%] font-normal">
                    {item.text}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Questions;
