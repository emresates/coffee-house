import React from 'react';
import { CustomerItems } from '../data/CustomerData';
import HeaderTitle from './subcomponents/HeaderTitle';

function CustomerSays() {
  return (
    <div className="customersays">
      <HeaderTitle header="Testimony" title="Customers Says" />

      <div className="testimonies">
        {CustomerItems.map((item, index) => (
          <div className="testimony" key={index}>
            <p>{item.text}</p>
            <div className="person">
              <img src={item.personImg} alt="" />
              <div className="person-info">
                <h1>{item.personName}</h1>
                <h2>{item.personJob}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomerSays;
