import React from 'react';
import { DishItems } from '../../data/MainDishData';
import Card from '../subcomponents/Card';

function MainDish() {
  return (
    <div className="ourproducts-items">
      {DishItems.slice(4, 10).map((item, index) => (
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

export default MainDish;
