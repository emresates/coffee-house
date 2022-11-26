import React from 'react';
import Hero from '../components/Hero';

function Home() {
  return (
    <>
      <Hero 
      image = "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1961&q=80"
      welcome = "Welcome"
      title = "The best coffe testing experience"
      text = "lorem ipsum dolor sit"
      />
    </>
  );
}

export default Home;
