import AboutUs from '@/components/sections/about-us/about-us';
import Business from '@/components/sections/business/business';
import Hero from '@/components/sections/hero/hero';

export default function Home() {
  return (
    <main className="home flex flex-col gap-[100px] py-[60px]">
      <Hero />
      <AboutUs />
      <Business />
    </main>
  );
}
