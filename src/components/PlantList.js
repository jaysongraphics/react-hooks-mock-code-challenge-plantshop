// import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantsData}) {
const plantsDetails = plantsData.map(plants => {
  return(
    <PlantCard 
        key={plants.id} 
        name={plants.name}
        image={plants.image}
        price={plants.price}
    />
  );
})

  return (
    <ul className="cards">
       {/* render PlantCards components in here  */}
       {plantsDetails}
   </ul>
  );
}





export default PlantList;
