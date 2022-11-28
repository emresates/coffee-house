import React from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Qualifications from '../components/Qualifications';
import ScrollToTop from '../components/ScrollToTop';
function Services() {
  return (
    <>
      <Hero
        image="https://images.unsplash.com/photo-1496582490020-60c1344c64aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1781&q=80"
        title="Services"
        button="hide"
      />
      <Qualifications />

      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Services;
