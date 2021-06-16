import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { useEffect, useState } from "react";

function PlantPage() {
const [plants, setPlants] = useState([]);
const plantsUrl = 'http://localhost:6001/plants'
// const [search, setSearch] = useState('')

useEffect(() => {
fetch(plantsUrl)
  .then(res => res.json())
  .then(data => setPlants(data))
    // console.log(plants);
}, []);

const addPlant = (newPlant) => {
  const plantArray = [...plants, newPlant]
  setPlants(plantArray)
}

  return (
    <main>
      <NewPlantForm 
      // addAplant={addAplant}
      />
      <Search />
      <PlantList 
          plantsData={plants}
          addPlant={addPlant}
        />
    </main>
  );
}

export default PlantPage;
