import React from "react";
import { useState } from "react"

function NewPlantForm({addPlant}) {
const [name, setName] = useState('')
const [image, setImage] = useState('')
const [price, setPrice] = useState(0)

// function addPlant(e){
//   e.preventdefault();
// }

const handleSubmit = (e) =>{
  // e.preventdefault();
  let dataPlant= {
    name: name,
    image: image,
    price: parseInt(price)
  }

fetch('http://localhost:6001/plants', {
  method: 'POST',
  headers: { 
    'Content-Type': 'application/json' 
},
  body: JSON.stringify(dataPlant)
})
    .then(response => response.json())
    // .then(newPlantObj => plantsData(newPlantObj))
}

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input 
            onChange = {(e) => setName(e.target.value)}
            type="text" 
            name="name" 
            placeholder="Plant name" />
        <input 
            onChange = {(e) => setImage(e.target.value)}
            type="text" 
            name="image" 
            placeholder="Image URL" />
        <input 
            onChange = {(e) => setPrice(e.target.value)}
            type="number" 
            name="price" 
            step="0.01" 
             placeholder="Price" />
        <button 
          type="submit">Add Plant</button>
      </form>
    </div>
  );
}


export default NewPlantForm;
