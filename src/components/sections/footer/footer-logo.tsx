import { general } from "@/config/general";

const FooterLogo = () => {
  const data = new Date();
  return (
    <div className="footer-logo flex flex-col gap-2 items-center">
      <a href="#" className="text-2xl uppercase font-semibold">
        {general.appName}
      </a>
      <p className="text-GRAY text-sm">{`© ${general.appName} ${data.getFullYear()}`}</p>
    </div>
  );
};
export default FooterLogo;
