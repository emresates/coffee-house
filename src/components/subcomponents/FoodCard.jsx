import React from 'react';

function FoodCard(props) {
  return (
    <div className="foodcard">
      <img src={props.image} alt={props.title} />
      <div className="foodcard-info">
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>
      <h2> ${props.price}</h2>
    </div>
  );
}

export default FoodCard;
