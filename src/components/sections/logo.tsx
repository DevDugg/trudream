import Image from "next/image";
import { general } from "@/config/general";

const Logo = () => {
  return (
    <div className="logo flex items-center gap-2">
      <Image src="/images/logo.svg" alt="Logo" width={24} height={24} />
      <span className="text-lg font-semibold">{general.appName}</span>
    </div>
  );
};
export default Logo;
