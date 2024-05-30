"use client";

import { Variants, motion } from "framer-motion";

import Image from "next/image";
import { colors } from "@/config/colors";
import { useState } from "react";

export type LinkExternalProps = {
  name: string;
  href: string;
};

const LinkExternal = ({ href, name }: LinkExternalProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex items-center gap-2"
    >
      <motion.div
        initial={{ scale: 0, width: 0 }}
        animate={isHovered ? { scale: 1, width: 24 } : {}}
        className="origin-bottom-left"
      >
        <Image src="/images/social-arrow.svg" alt="external link" width={24} height={24} />
      </motion.div>
      <motion.a
        href={href}
        rel="noreferrer noopener"
        className="text-base text-GRAY"
        initial={{ color: colors.GRAY }}
        animate={{ color: isHovered ? colors.BLACK : colors.GRAY }}
      >
        {name}
      </motion.a>
    </div>
  );
};
export default LinkExternal;
