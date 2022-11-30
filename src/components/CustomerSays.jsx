import { motion } from 'framer-motion';
import React from 'react';
import { CustomerItems } from '../data/CustomerData';
import HeaderTitle from './subcomponents/HeaderTitle';
function CustomerSays() {
  return (
    <div className="customersays">
      <HeaderTitle header="Testimony" title="Customers Says" />

      <div className="testimonies">
        {CustomerItems.map((item, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: 'ease', duration: 1 }}
            className="testimony"
            key={index}
          >
            <p>{item.text}</p>
            <div className="person">
              <img src={item.personImg} alt="" />
              <div className="person-info">
                <h1>{item.personName}</h1>
                <h2>{item.personJob}</h2>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default CustomerSays;
