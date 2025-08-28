import Hero from '@/components/Hero';
import Nav from '@/components/Nav';
import Cards from '@/components/Cards';
import Suggested from '@/components/Suggested';
import Explore from '@/components/Explore';

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Cards />
      <Suggested />
      <Explore />
    </>
  );
}
