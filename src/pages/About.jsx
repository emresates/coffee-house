import React from 'react';
import Hero from '../components/Hero';
import OurStory from '../components/OurStory';

function About() {
  return (
    <>
      <Hero
        image="https://images.unsplash.com/photo-1527512666523-bb0e4389d842?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        title="About"
        button="hide"
      />
      <OurStory />
    </>
  );
}

export default About;
