"use client";

import { AnimatePresence, motion } from "framer-motion";

import Container from "@/components/layout/container";
import Image from "next/image";
import clsx from "clsx";
import { colors } from "@/config/colors";
import { questionsData } from "@/data/questions.data";
import { useState } from "react";

const Questions = () => {
  const [activeFAQ, setActiveFAQ] = useState(0);

  return (
    <section>
      <Container>
        <h3 className="h3 text-center -tracking-[1%] mb-12">Have any questions?</h3>

        <div className="flex flex-col gap-6">
          {questionsData.map((item, i) => (
            <motion.div
              initial={{ height: 0, borderColor: colors.GRAY }}
              animate={{ height: "100%", borderColor: i === activeFAQ ? `${colors.GRAY}00` : colors.GRAY }}
              exit={{ height: 0 }}
              onClick={() => setActiveFAQ(i)}
              key={item.title}
              className={
                "flex flex-col text-BLACK rounded-[16px] cursor-pointer border bg-LIGHT_GRAY font-semibold leading-[120%] py-[18.5px] px-4"
              }
            >
              <div className="flex items-center gap-6 justify-between">
                <h4
                  className={clsx({
                    "text-ACCENT": activeFAQ === i,
                  })}
                >
                  {item.title}
                </h4>
                <Image
                  src={`/images/${activeFAQ === i ? "minus" : "plus"}.svg`}
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
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-6 text-[16px] transition-all leading-[140%] font-normal">{item.text}</p>
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
