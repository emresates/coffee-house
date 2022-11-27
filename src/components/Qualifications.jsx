import React from 'react';
import Coffee from '../svg/coffeebean.svg';
import Truck from '../svg/truck.svg';
import List from '../svg/list.svg';

function Qualifications() {
  return (
    <>
      <div className="qualifications">
        <div className="qualifications-item">
          <div className="svg">
            <img src={List} alt="" />
          </div>
          <h1>Easy to Order</h1>
          <p>
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic.
          </p>
        </div>
        <div className="qualifications-item">
          <div className="svg">
            <img src={Truck} alt="" />
          </div>
          <h1>Fastest Delivery</h1>
          <p>
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic.
          </p>
        </div>
        <div className="qualifications-item">
          <div className="svg">
            <img src={Coffee} alt="" />
          </div>
          <h1>Quality Coffee</h1>
          <p>
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic.
          </p>
        </div>
      </div>
    </>
  );
}

export default Qualifications;
