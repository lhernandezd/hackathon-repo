import React from "react";

function Card(props) {
  const { id, photo, name, city, price, rating } = props;
  return (
    <div id={id}>
      <img src={photo} alt={name} />
      <div>
        <span>{city}</span>
        <h2>{name}</h2>
        <p>Desde COP ${price}</p>
        <span>{rating}</span>
      </div>
    </div>
  );
}

export default Card;
