"use client";

import Burger, { headerLinks } from "./burger";

import { Button } from "@/components/ui/button";
import Container from "@/components/layout/container";
import Image from "next/image";
import LinkInternal from "../link-internal";
import Logo from "../logo";
import { motion } from "framer-motion";
import { useScrollToTarget } from "@/lib/use-scroll-to-target";
import { useState } from "react";

const Header = () => {
  const [isBurgerOpened, setIsBurgerOpened] = useState(false);

  return (
    <header className="header absolute left-0 right-0">
      <Burger isOpened={isBurgerOpened} />
      <Container className="flex items-center gap-6 justify-between pt-6">
        <Logo />

        <ul className="hidden lg:flex items-center gap-10">
          {headerLinks.map((link, i) => (
            <li key={i} onClick={() => scrollTo}>
              <LinkInternal {...link} />
            </li>
          ))}
        </ul>

        <Button className="hidden lg:block font-medium text-[18px] px-10">Get started</Button>
        <button className="size-6 relative lg:hidden" onClick={() => setIsBurgerOpened(!isBurgerOpened)}>
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
