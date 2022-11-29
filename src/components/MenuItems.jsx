import React from 'react';
import HeaderTitle from '../components/subcomponents/HeaderTitle';
import { DesertItems } from '../data/DessertsData';
import { DrinkItems } from '../data/DrinksData';
import { DishItems } from '../data/MainDishData';
import { StarterItems } from '../data/StarterData';
import FoodCard from './subcomponents/FoodCard';

function MenuItems() {
  return (
    <div className="menu-items">
      <HeaderTitle header="Discover" title="Our Menu" />
      <div className="food">
        <div className="food-item">
          <h1>Starter</h1>
          {StarterItems.map((item, index) => (
            <FoodCard
              key={index}
              image={item.img}
              title={item.title}
              text={item.text}
              price={item.price}
            />
          ))}
        </div>
        <div className="food-item">
          <h1>Main Dish</h1>
          {DishItems.slice(0, 4).map((item, index) => (
            <FoodCard
              key={index}
              image={item.img}
              title={item.title}
              text={item.text}
              price={item.price}
            />
          ))}
        </div>
        <div className="food-item">
          <h1>Desserts</h1>
          {DesertItems.slice(0, 4).map((item, index) => (
            <FoodCard
              key={index}
              image={item.img}
              title={item.title}
              text={item.text}
              price={item.price}
            />
          ))}
        </div>
        <div className="food-item">
          <h1>Drinks</h1>
          {DrinkItems.slice(0, 4).map((item, index) => (
            <FoodCard
              key={index}
              image={item.img}
              title={item.title}
              text={item.text}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MenuItems;
