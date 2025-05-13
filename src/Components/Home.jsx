import { useEffect } from "react";
import HeroCarousel from "./HeroCarousel";
import Services from "./Services";
import Footer from "./Footer";
import Faq from "./Faq";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <HeroCarousel />
      <Services />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
