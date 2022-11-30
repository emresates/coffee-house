import { motion } from 'framer-motion';
import React from 'react';

function Gallery() {
  return (
    <div className="gallery">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ type: 'linear', duration: 1, delay: 0.2 }}
        className="image"
      >
        <img
          src="https://images.unsplash.com/photo-1526893381913-e311045b8064?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
          alt=""
        />
        <div className="yellow" />
        <i className="fa-solid fa-magnifying-glass"></i>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ type: 'linear', duration: 1, delay: 0.4 }}
        className="image"
      >
        <img
          src="https://images.unsplash.com/photo-1576670392954-38b1fdb78b1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
          alt=""
        />
        <div className="yellow" />
        <i className="fa-solid fa-magnifying-glass"></i>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ type: 'linear', duration: 1, delay: 0.6 }}
        className="image"
      >
        <img
          src="https://images.unsplash.com/photo-1601317848953-057aa886867b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1802&q=80"
          alt=""
        />
        <div className="yellow" />
        <i className="fa-solid fa-magnifying-glass"></i>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ type: 'linear', duration: 1, delay: 0.8 }}
        className="image"
      >
        <img
          src="https://images.unsplash.com/photo-1492934867615-2a451e01c063?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
          alt=""
        />
        <div className="yellow" />
        <i className="fa-solid fa-magnifying-glass"></i>
      </motion.div>
    </div>
  );
}

export default Gallery;
