"use client";

import LinkExternal, { LinkExternalProps } from "../link-external";

import BurgerLinkInternal from "./burger-internal-link";
import { motion } from "framer-motion";
import { socialLinks } from "../footer/footer";

type BurgerProps = {
  isOpened: boolean;
};

export const headerLinks: LinkExternalProps[] = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "How it works",
    href: "#how-it-works",
  },
  {
    name: "Testimonials",
    href: "#testimonials",
  },
  {
    name: "FAQ",
    href: "#faq",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

const Burger = ({ isOpened }: BurgerProps) => {
  return (
    <motion.div
      className="burger fixed top-[52px] left-0 w-screen h-[calc(100dvh-52px)] px-4 py-20 flex flex-col gap-6 z-50 bg-WHITE"
      initial={{ opacity: 0, x: "100%" }}
      animate={isOpened ? { opacity: 1, x: "0%" } : {}}
    >
      <ul className="links w-full flex flex-col gap-6">
        {headerLinks.map((link, i) => (
          <li key={i}>
            <BurgerLinkInternal {...link} />
          </li>
        ))}
      </ul>
      <div className="hr w-full h-0 border-t border-GRAY"></div>
      <ul className="socials flex flex-col gap-4">
        <h3 className="text-lg font-bold text-BLACK">Socials</h3>
        <div className="flex items-center gap-6 flex-wrap">
          {socialLinks.map((link, i) => (
            <LinkExternal key={i} {...link} />
          ))}
        </div>
      </ul>
    </motion.div>
  );
};
export default Burger;
