import React, { useState } from "react";

function PlantCard({ plant, setPlants }) {
  const { id, name, image, price } = plant;
  const [isSoldOut, setIsSoldOut] = useState(false);


  const toggleSoldOut = () => {
    setIsSoldOut(!isSoldOut);
  };


  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      {isSoldOut ? (
        <button className="secondary" onClick={toggleSoldOut}>
          Out of Stock
        </button>
      ) : (
        <button className="primary" onClick={toggleSoldOut}>
          In Stock
        </button>
      )}
    </li>
  );
}

export default PlantCard;