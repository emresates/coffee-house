import React from 'react';
import { DesertItems } from '../../data/DessertsData';
import Card from '../subcomponents/Card';

function Desserts() {
  return (
    <div className="ourproducts-items">
      {DesertItems.slice(4, 10).map((item, index) => (
        <Card
          key={index}
          image={item.img}
          title={item.title}
          p={item.text}
          price={item.price}
        />
      ))}
    </div>
  );
}

export default Desserts;
