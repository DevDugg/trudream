import AboutUs from '@/components/sections/about-us/about-us';
import Business from '@/components/sections/business/business';
import Guide from '@/components/sections/guide/guide';
import Help from '@/components/sections/help/help';
import Hero from '@/components/sections/hero/hero';
import Questions from '@/components/sections/questions/questions';
import Reviews from '@/components/sections/reviews/reviews';

export default function Home() {
  return (
    <main className="home flex flex-col gap-[100px] py-[60px] sm:py-12 lg:py-20">
      <Hero />
      <AboutUs />
      <Business />
      <Guide />
      <Reviews />
      <Questions />
      <Help />
    </main>
  );
}
