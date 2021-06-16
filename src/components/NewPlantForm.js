import React from "react";
import {useState} from 'react'

function NewPlantForm({addPlant}) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  const plantUrl =  'http://localhost:6001/plants'

function handleForm(e){
  e.preventDefault();
  let addPlantItem ={
    name: name,
    image: image,
    price: parseInt(price)
  }

fetch(plantUrl, {
  method: 'POST',
  headers: { 
      'Content-Type': 'application/json' 
    },
  body: JSON.stringify(addPlantItem),
})
  .then((res) => res.json())
  .then(newPlant => addPlant(newPlant))
}
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleForm}> 
        <input 
              type="text" 
              name="name" 
              placeholder="Plant name" 
              onChange={(e)=> setName(e.target.value)}
            />
        <input 
              type="text" 
              name="image" 
              placeholder="Image URL" 
              onChange={(e)=> setImage(e.target.value)}
            />
        <input 
              type="number" 
              name="price" 
              step="0.01" 
              placeholder="Price" 
              onChange={(e)=> setPrice(e.target.value)}
            />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;