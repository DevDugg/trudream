import { general } from '@/config/general';

const FooterLogo = () => {
  const data = new Date();
  return (
    <div className="footer-logo flex flex-col gap-2 sm:gap-6 items-center sm:items-start">
      <a href="#" className="text-2xl sm:text-5xl uppercase font-semibold">
        {general.appName}
      </a>
      <p className="text-GRAY text-sm sm:text-[18px] sm:leading-none sm:font-bold sm:text-black">{`©  ${
        general.appName
      } ${data.getFullYear()}`}</p>
    </div>
  );
};
export default FooterLogo;
