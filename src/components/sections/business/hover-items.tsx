"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { businessData } from "@/data/business.data";
import clsx from "clsx";
import { colors } from "@/config/colors";
import { defaultTransition } from "@/config/transitions";

const HoverItems = () => {
  const [hoverItem, setHoverItem] = useState(0);
  const titleRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className="flex justify-between">
        <div className="relative max-w-[300px] w-full">
          <motion.div
            className="flex-col left-0 w-full absolute xl:mx-auto"
            initial={{ top: 0 }}
            animate={{ top: hoverItem * 128 }}
          >
            <div>
              <div className="overflow-hidden h-[170px] relative">
                <AnimatePresence mode="popLayout">
                  {businessData.map(
                    (item, i) =>
                      i === hoverItem && (
                        <motion.div
                          className={"absolute"}
                          key={i}
                          initial={i === 0 ? { top: "0%" } : { top: "100%" }}
                          animate={i === hoverItem ? { top: "0%", scale: 1 } : {}}
                          exit={{ top: "100%", scale: 0.4 }}
                          transition={defaultTransition}
                        >
                          <Image src={`/images/business/${item.img}.png`} alt={item.title} width={300} height={300} />
                        </motion.div>
                      ),
                  )}
                </AnimatePresence>
              </div>
              <AnimatePresence mode="wait">
                {businessData.map(
                  (item, i) =>
                    i === hoverItem && (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={i === hoverItem ? { opacity: 1 } : {}}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="p mt-4 mb-6">{businessData[hoverItem].text}</p>
                        <Button className="w-full font-medium">Book a call</Button>
                      </motion.div>
                    ),
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="flex flex-col flex-[0_1_50%]"
          initial={{ borderTop: `1px solid ${colors.GRAY}` }}
          animate={hoverItem === 0 ? { borderTop: `1px solid ${colors.GRAY}00` } : {}}
        >
          {businessData.map((item, i) => (
            <motion.div
              ref={titleRef}
              initial={{
                backgroundColor: `${colors.LIGHT_GRAY}00`,
                paddingLeft: 0,
                borderRadius: 0,
                borderColor: colors.GRAY,
                color: colors.GRAY,
              }}
              animate={
                i === hoverItem
                  ? {
                      backgroundColor: colors.LIGHT_GRAY,
                      paddingLeft: "24px",
                      color: colors.ACCENT,
                      borderRadius: 16,
                      borderColor: `${colors.GRAY}00`,
                    }
                  : i === hoverItem - 1
                  ? { borderColor: `${colors.GRAY}00` }
                  : {}
              }
              key={i}
              onMouseMove={() => setHoverItem(i)}
              className="py-10 cursor-pointer text-[48px] font-bold leading-none pr-6 border-b"
            >
              {item.title}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default HoverItems;
