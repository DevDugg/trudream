"use client";

import { useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { businessData } from "@/data/business.data";
import { colors } from "@/config/colors";
import { motion } from "framer-motion";

const HoverItems = () => {
  const [hoverItem, setHoverItem] = useState(0);
  const titleRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className="flex justify-between">
        <motion.div
          initial={{ top: 0, opacity: 0 }}
          animate={{
            top: hoverItem * 128,
            opacity: [0, 1],
          }}
          className="flex-[0_0_300px] top-0 relative xl:mx-auto"
        >
          <div className="absolute">
            <Image src={`/images/business/${businessData[hoverItem].img}.png`} alt="plus" width={300} height={170} />
            <p className="p mt-4 mb-6">{businessData[hoverItem].text}</p>
            <Button className="w-full font-medium">Book a call</Button>
          </div>
        </motion.div>

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
