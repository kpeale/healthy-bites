import Hero from '@/components/Hero';
import Nav from '@/components/Nav';
import Cards from '@/components/Cards';
import Suggested from '@/components/Suggested';
import Explore from '@/components/Explore';
import Signup from '@/components/Signup';
import Articles from '@/components/Articles';
import About from '@/components/About';
import Footer from '@/components/Footer';

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
      <About />
      <Footer />
    </>
  );
}
