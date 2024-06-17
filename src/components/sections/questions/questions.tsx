'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Container from '@/components/layout/container';
import { questionsData } from '@/data/questions.data';
import Image from 'next/image';
import { useState } from 'react';
import clsx from 'clsx';

const Questions = () => {
  const [activeFAQ, setActiveFAQ] = useState(0);

  return (
    <section>
      <Container>
        <h3 className="h3 text-center -tracking-[1%] mb-12">Have any questions?</h3>

        <div className="flex flex-col gap-6">
          {questionsData.map((item, i) => (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: '100%' }}
              exit={{ height: 0 }}
              onClick={() => setActiveFAQ(i)}
              key={item.title}
              className={clsx(
                'flex flex-col text-BLACK rounded-[16px] transition-all cursor-pointer bg-LIGHT_GRAY border-GRAY border-[1px] font-semibold leading-[120%] py-[18.5px] px-4',
                {
                  'border-none': activeFAQ === i,
                },
              )}>
              <div className="flex items-center gap-6 justify-between">
                <h4
                  className={clsx('transition-all', {
                    'text-ACCENT': activeFAQ === i,
                  })}>
                  {item.title}
                </h4>
                <Image
                  src={`/images/${activeFAQ === i ? 'minus' : 'plus'}.svg`}
                  alt="plus"
                  width={24}
                  height={24}
                  className="transition-all"
                />
              </div>

              <AnimatePresence>
                {activeFAQ === i && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden">
                    <p className="mt-6 text-[16px] transition-all leading-[140%] font-normal">
                      {item.text}
                    </p>
                  </motion.div>
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
