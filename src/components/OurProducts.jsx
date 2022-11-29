import React from 'react';
import { Link } from 'react-router-dom';
import HeaderTitle from './subcomponents/HeaderTitle';

function OurProducts() {
  return (
    <div className="ourproducts">
      <HeaderTitle header="Discover" title="Our Products" />
      <div className="link-container">
        <Link className="link" to={'/menu'}>
          Main Dish
        </Link>
        <Link className="link" to={'drinks'}>
          Drinks
        </Link>
        <Link className="link" to={'desserts'}>
          Desserts
        </Link>
      </div>
    </div>
  );
}

export default OurProducts;
