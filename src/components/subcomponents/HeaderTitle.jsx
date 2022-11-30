import { motion } from 'framer-motion';
import React from 'react';

function HeaderTitle(props) {
  return (
    <motion.div
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      transition={{ type: 'linear', duration: 1 }}
    >
      <h1 className="main-header">{props.header}</h1>
      <h2 className="main-title">{props.title}</h2>
      <p className="main-paragraph">{props.p}</p>
    </motion.div>
  );
}

export default HeaderTitle;
