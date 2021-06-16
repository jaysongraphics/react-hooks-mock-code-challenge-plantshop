import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")

  useEffect(()=> {
    fetch ('http://localhost:6001/plants')
    .then (res => res.json())
    .then (plantData => setPlants(plantData))
  }, [])
  // console.log(plants);

  function addPlant(newPlant){
    let newPlantArray = [...plants, newPlant]
    setPlants(newPlantArray)
  }

  const filteredItem = plants.filter(plant => {
    return (plant.name.toLowerCase().includes(search.toLowerCase()))
  })

function removePlant (id){
    const newListing = plants.filter(plant => plant.id !== id);
    setPlants(newListing);
}

  return (
    <main>
      <NewPlantForm addPlant={addPlant}/>
      <Search setSearch={setSearch} search={search}/>
      <PlantList plants = {filteredItem} removePlant={removePlant}/>
    </main>
  );
}

export default PlantPage;