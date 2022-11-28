import React from 'react';
import BookaTable from '../components/BookaTable';
import CoffeeSellers from '../components/CoffeeSellers';
import Count from '../components/Count';
import CustomerSays from '../components/CustomerSays';
import Gallery from '../components/Gallery';
import Hero from '../components/Hero';
import OurMenu from '../components/OurMenu';
import FavoriteProducts from '../components/FavoriteProducts';
import OurStory from '../components/OurStory';
import Qualifications from '../components/Qualifications';
import ScrollToTop from '../components/ScrollToTop';
import RecentFromBlog from '../components/RecentFromBlog';
import Footer from '../components/Footer';
function Home() {
  return (
    <>
      <Hero
        welcome="Welcome"
        image="https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib:rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1961&q=80"
        title="THE BEST COFFE TESTING EXPERIENCE"
        text="A small river named Duden flows by their place and supplies."
      />
      <BookaTable />
      <OurStory />
      <Qualifications />
      <OurMenu />
      <Count />
      <CoffeeSellers />
      <Gallery />
      <FavoriteProducts />
      <CustomerSays />
      <RecentFromBlog />
      <Footer />

      <ScrollToTop />
    </>
  );
}

export default Home;
