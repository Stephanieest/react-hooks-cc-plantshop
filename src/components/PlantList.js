import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ data }) {
  return (
    <ul className="cards">
      {data.map((item, index) => {
        return (
          <PlantCard
            key={item.id || index} //the test were getting undefined when no id was found, solves unique key error
            image={item.image}
            name={item.name}
            price={item.price}
          />
        );
      })}
    </ul>
  );
}

export default PlantList;