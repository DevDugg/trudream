"use client";

import Image from "next/image";
import { colors } from "@/config/colors";
import { motion } from "framer-motion";

interface IProps {
  title: string;
  text: string;
  i: number;
  activeFAQ: number;
  setActiveFAQ: (num: number) => void;
}

const QuestionCard = ({ i, title, text, activeFAQ, setActiveFAQ }: IProps) => {
  return (
    <motion.div
      initial={{ borderColor: colors.GRAY }}
      animate={{ borderColor: i === activeFAQ ? `${colors.GRAY}00` : colors.GRAY }}
      onClick={() => setActiveFAQ(i)}
      className={
        "flex flex-col text-BLACK rounded-[16px] cursor-pointer border bg-LIGHT_GRAY font-semibold leading-[120%] py-[18.5px] px-4"
      }
    >
      <div className="flex items-center gap-6 justify-between">
        <motion.h4
          initial={{ color: colors.BLACK }}
          animate={i === activeFAQ ? { color: colors.ACCENT } : {}}
          className="text-[18px] lg:text-[24px] leading-[120%] font-semibold "
        >
          {title}
        </motion.h4>
        <div className="relative size-6">
          <motion.div
            className="top-0 right-0 size-6 absolute"
            initial={{ opacity: 1 }}
            animate={i === activeFAQ ? { opacity: 0 } : {}}
          >
            <Image src={`/images/plus.svg`} alt="plus" width={24} height={24} />
          </motion.div>
          <motion.div
            className="top-0 right-0 size-6 absolute"
            initial={{ opacity: 0 }}
            animate={i === activeFAQ ? { opacity: 1 } : {}}
          >
            <Image src={`/images/minus.svg`} alt="minus" width={24} height={24} />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, height: 0, marginTop: 0 }}
        animate={i === activeFAQ ? { opacity: 1, height: "fit-content", marginTop: 16 } : {}}
        className="overflow-hidden"
      >
        <p className="p font-normal">{text}</p>
      </motion.div>
    </motion.div>
  );
};

export default QuestionCard;
