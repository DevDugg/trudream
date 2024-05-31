"use client";

import { AnimatePresence } from "framer-motion";
import Burger from "./burger";
import Container from "@/components/layout/container";
import Image from "next/image";
import Logo from "../logo";
import { motion } from "framer-motion";
import { useState } from "react";

const Header = () => {
  const [isBurgerOpened, setIsBurgerOpened] = useState(false);
  return (
    <header className="header">
      <Burger isOpened={isBurgerOpened} />
      <Container className="flex items-center gap-6 justify-between pt-6">
        <Logo />
        <button className="size-6 relative" onClick={() => setIsBurgerOpened(!isBurgerOpened)}>
          <motion.div
            className="origin-bottom fill-mode-forwards w-6 absolute bottom-0 left-0"
            initial={{ opacity: 1, scale: 1 }}
            animate={isBurgerOpened ? { opacity: 0, scale: 0 } : {}}
          >
            <Image src="/images/menu.svg" alt="Menu" width={24} height={24} />
          </motion.div>
          <motion.div
            className="origin-top fill-mode-forwards w-6 absolute top-0 left-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={isBurgerOpened ? { opacity: 1, scale: 1 } : {}}
          >
            <Image src="/images/menu-close.svg" alt="Menu" width={24} height={24} />
          </motion.div>
        </button>
      </Container>
    </header>
  );
};
export default Header;