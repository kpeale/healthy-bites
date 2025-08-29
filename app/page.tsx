import Hero from '@/components/Hero';
import Nav from '@/components/Nav';
import Cards from '@/components/Cards';
import Suggested from '@/components/Suggested';
import Explore from '@/components/Explore';
import Signup from '@/components/Signup';
import Articles from '@/components/Articles';

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Cards />
      <Suggested />
      <Explore />
      <Signup />
      <Articles />
    </>
  );
}
