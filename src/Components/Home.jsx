import React, { useEffect } from "react";
import HeroCarousel from "./HeroCarousel";
import Services from "./Services";
import Contact from "./Contact";
import BusinessCentric from "./Consultancy";
import Footer from "./Footer";
import Blog from "./Blog";
import ContactUs from "./ContactUs";
import Faq from "./Faq";
import SoftwareDevelopment from "./SoftwareDevelopment";
import FaqAccordion from "./FaqAccordion";


const Home = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  return (
    <>
      <HeroCarousel />
      <Services />
      <Contact />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
