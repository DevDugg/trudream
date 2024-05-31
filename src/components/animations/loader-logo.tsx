import Image from "next/image";

const LoaderLogo = () => {
  return (
    <div className="animate-spin">
      <Image src="/images/logo.svg" alt="Logo" width={56} height={56} />
    </div>
  );
};
export default LoaderLogo;
