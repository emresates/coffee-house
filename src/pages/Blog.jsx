import React from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ScrollToTop from '../components/ScrollToTop';
function Blog() {
  return (
    <>
      <Hero
        image="https://images.unsplash.com/photo-1509785307050-d4066910ec1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1928&q=80"
        button="hide"
        title="Blog"
      />

      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Blog;
