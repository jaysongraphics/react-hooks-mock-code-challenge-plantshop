import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, removePlant}) {
  const plantsArr = plants.map(plant => {
    return <PlantCard 
    key = {plant.id}  
    plant={plant} 
    removePlant={removePlant}
    />
  })
  return (
    <ul className="cards">
      {plantsArr}
    </ul>
  );
}

export default PlantList;