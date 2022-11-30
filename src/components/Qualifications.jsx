import React from 'react';
import Coffee from '../svg/coffeebean.svg';
import Truck from '../svg/truck.svg';
import List from '../svg/list.svg';
import { motion } from 'framer-motion';
function Qualifications() {
  return (
    <>
      <div className="qualifications">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: 'linear', duration: 1 }}
          className="qualifications-item"
        >
          <div className="svg">
            <img src={List} alt="" />
          </div>
          <h1>Easy to Order</h1>
          <p>
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'linear', duration: 1 }}
          className="qualifications-item"
        >
          <div className="svg">
            <img src={Truck} alt="" />
          </div>
          <h1>Fastest Delivery</h1>
          <p>
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: 'linear', duration: 1 }}
          className="qualifications-item"
        >
          <div className="svg">
            <img src={Coffee} alt="" />
          </div>
          <h1>Quality Coffee</h1>
          <p>
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic.
          </p>
        </motion.div>
      </div>
    </>
  );
}

export default Qualifications;
