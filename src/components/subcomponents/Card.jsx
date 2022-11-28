import React from 'react';

function Card(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <p>{props.p}</p>
      <h2>${props.price}</h2>
      <button>Add to Cart</button>
    </div>
  );
}

export default Card;
