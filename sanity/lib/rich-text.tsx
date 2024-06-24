// 'use client';

import { PortableText } from "@portabletext/react";
import { PropsWithChildren } from "react";
import clsx from "clsx";

interface RichTextProps {
  className?: string;

  // this should only be an array of blocks
  children: any;
}

const RichText = ({ className, children }: RichTextProps) => {
  return (
    <div className={clsx("inline-block", className)}>
      <PortableText value={children} />
    </div>
  );
};
export default RichText;
