import React from 'react';
import ContactItems from '../components/ContactItems';
import Footer from '../components/Footer';
import GoogleMaps from '../components/GoogleMap';
import Hero from '../components/Hero';
import ScrollToTop from '../components/ScrollToTop';
function Contact() {
  return (
    <>
      <Hero
        image="https://images.unsplash.com/photo-1599579134411-bd068f77d4d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
        title="Contact"
        button="hide"
      />
      <ContactItems />
      <GoogleMaps />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Contact;
