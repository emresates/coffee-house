import { motion } from 'framer-motion';
import React from 'react';

function Card(props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ type: 'linear', duration: 1 }}
      className="card"
    >
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <p>{props.p}</p>
      <h2>${props.price}</h2>
      <button>Add to Cart</button>
    </motion.div>
  );
}

export default Card;
