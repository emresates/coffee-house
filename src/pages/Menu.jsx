import React from 'react';
import BookaTable from '../components/BookaTable';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ScrollToTop from '../components/ScrollToTop';

function Menu() {
  return (
    <>
      <Hero
        image="https://images.unsplash.com/photo-1516815334695-610d284a5d50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80"
        title="Menu"
        button="hide"
      />
      <BookaTable />

      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Menu;
