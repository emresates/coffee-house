import { motion } from 'framer-motion';
import React from 'react';

function Hero(props) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ type: 'linear', duration: 1 }}
        className="hero"
      >
        <img src={props.image} alt="" />
        <div className="hero-infos">
          <h1 className="welcome">{props.welcome}</h1>
          <h2 className="title">{props.title}</h2>
          <p className="text">{props.text}</p>
          <div className={`buttons ${props.button}`}>
            <button>Order Now</button>
            <button>View Menu</button>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Hero;
