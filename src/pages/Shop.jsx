import React from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ScrollToTop from '../components/ScrollToTop';

function Shop() {
  return (
    <>
      <Hero
        image="https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        title="Shop"
        button="hide"
      />


      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Shop;
