import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import Donate from '../components/Donate';
import News from '../components/News';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Features />
      <Donate />
      <News />
      <Footer />
    </>
  )
}
