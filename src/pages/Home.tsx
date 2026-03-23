import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Offering from '../components/Offering';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Offering />
      <Pricing />
      <Contact />
    </>
  );
};

export default Home;
