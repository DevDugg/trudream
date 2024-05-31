"use client";

import { LinkExternalProps } from "../link-external";
import { colors } from "@/config/colors";
import { motion } from "framer-motion";
import { useScrollToTarget } from "@/lib/use-scroll-to-target";
import { useState } from "react";

const BurgerLinkInternal = ({ href, name }: LinkExternalProps) => {
  const { handleOnClick } = useScrollToTarget(href);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.a
      href={href}
      onClick={handleOnClick}
      className="text-2xl text-BLACK font-medium w-full relative"
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ color: colors.BLACK }}
      animate={isHovered ? { color: colors.ACCENT } : {}}
    >
      <span>{name}</span>
      <motion.div
        className="absolute left-0 bottom-0 w-full border-t-2 border-ACCENT h-0"
        initial={{ scaleX: 0, transformOrigin: "bottom right", animationFillMode: "forwards" }}
        animate={
          isHovered
            ? { scaleX: 1, transformOrigin: "bottom left", animationFillMode: "forwards" }
            : { scaleX: 0, transformOrigin: "bottom right", animationFillMode: "forwards" }
        }
      ></motion.div>
    </motion.a>
  );
};
export default BurgerLinkInternal;
