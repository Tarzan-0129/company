import React, { useEffect } from "react";
import HeroCarousel from "./HeroCarousel";
import Services from "./Services";
import OurProduct from "./OurProduct";
import WhyArisezen from "./WhyArisezen";
import Contact from "./Contact";
import BusinessCentric from "./BusinessCentric";
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
      <OurProduct />
      <Contact />
      <WhyArisezen />
      <BusinessCentric />

      


      <Faq />
      <Footer />
    </>
  );
};

export default Home;
