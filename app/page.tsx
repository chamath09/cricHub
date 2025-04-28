import React from "react";
import Hero from "./Hero/page";
import Destination from "./features/page";
import Hotel from "./blog/page";
import AboutUs from "./about/page";
import WhyChooseUs from "./services/page";
import ContactUs from "./contact/page";


const HomePage = () => {
  return (
    <div>
      <Hero />
      <Destination />
      <Hotel />
      <AboutUs />
      <WhyChooseUs />
      <ContactUs />
    </div>
  );
};

export default HomePage;
