import React from 'react'
import { DrinkItems } from '../../data/DrinksData'
import Card from '../subcomponents/Card'

function Drinks() {
  return (
    <div className="ourproducts-items">
    {DrinkItems.slice(4, 10).map((item, index) => (
      <Card
        key={index}
        image={item.img}
        title={item.title}
        p={item.text}
        price={item.price}
      />
    ))}
  </div>
  )
}

export default Drinks