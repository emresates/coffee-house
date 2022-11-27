import React from 'react';
import Hero from '../components/Hero';
import Qualifications from '../components/Qualifications';

function Services() {
  return (
    <>
      <Hero
        image="https://images.unsplash.com/photo-1496582490020-60c1344c64aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1781&q=80"
        title="Services"
        button="hide"
      />
      <Qualifications />
    </>
  );
}

export default Services;
