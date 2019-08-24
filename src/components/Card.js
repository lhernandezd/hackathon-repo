import React from "react";

function Card(props) {
  const { name, id } = props;
  return (
    <div id={id}>
      <p>{name}</p>
    </div>
  );
}

export default Card;
