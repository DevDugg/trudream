"use client";

import { LinkExternalProps } from "./link-external";
import { colors } from "@/config/colors";
import { motion } from "framer-motion";
import { useScrollToTarget } from "@/lib/use-scroll-to-target";
import { useState } from "react";

const LinkInternal = ({ href, name }: LinkExternalProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { handleOnClick } = useScrollToTarget(href);
  return (
    <div onMouseOver={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <motion.a
        onClick={handleOnClick}
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
export default LinkInternal;
