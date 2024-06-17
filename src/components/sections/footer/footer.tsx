import LinkExternal, { LinkExternalProps } from '../link-external';

import Container from '@/components/layout/container';
import FooterLogo from './footer-logo';
import LinkInternal from '../link-internal';

export const footerLinks: LinkExternalProps[] = [
  {
    name: 'Home',
    href: '#',
  },
  {
    name: 'About',
    href: '#about',
  },
  {
    name: 'Services',
    href: '#services',
  },
  {
    name: 'How it works',
    href: '#how-it-works',
  },
  {
    name: 'Testimonials',
    href: '#testimonials',
  },
  {
    name: 'FAQ',
    href: '#faq',
  },
  {
    name: 'Contact',
    href: '#contact',
  },
];

export const socialLinks: LinkExternalProps[] = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/',
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="flex flex-col gap-10 pb-10">
        <div className="flex flex-col sm:flex-row gap-10 sm:max-w-[480px] sm:justify-between">
          <div className="flex flex-col gap-6">
            <h3 className="text-BLACK font-medium text-center sm:text-left">Sitemap</h3>
            <div className="flex flex-wrap sm:grid sm:grid-cols-2 sm:gap-y-2 sm:gap-x-6 gap-6">
              {footerLinks.map((link, i) => (
                <LinkInternal key={i} {...link} />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-BLACK font-medium text-center sm:text-left">Socials</h3>
            <div className="flex flex-wrap sm:flex-col gap-6 sm:gap-2">
              {socialLinks.map((link, i) => (
                <LinkExternal key={i} {...link} />
              ))}
            </div>
          </div>
        </div>

        <FooterLogo />
      </Container>
    </footer>
  );
};
export default Footer;
