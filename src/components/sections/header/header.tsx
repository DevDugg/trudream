import Container from "@/components/layout/container";
import Image from "next/image";
import Logo from "../logo";

const Header = () => {
  return (
    <header className="header">
      <Container className="flex items-center gap-6 justify-between pt-6">
        <Logo />
        <button className="size-6">
          <Image src="/images/menu.svg" alt="Menu" width={24} height={24} />
        </button>
      </Container>
    </header>
  );
};
export default Header;
