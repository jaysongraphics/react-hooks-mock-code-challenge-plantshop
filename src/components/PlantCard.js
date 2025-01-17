import React, {useState} from "react";

function PlantCard({removePlant, plant}) {
  const {id, name, image, price} = plant
  const [outOfStock, setOutOfStock] = useState(true)

  function handleStock(){
    setOutOfStock(outOfStock => !outOfStock)
  }

  const removeItem = () => {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: 'DELETE',
    })
    removePlant(id);
    }

  return (
    <li className="card">
        <img src={image}
        alt={name} />
        <h4>{name}</h4>
        <p>Price: {price}</p>
      {outOfStock ? (
        <button onClick={handleStock} className="primary">In Stock
        </button>) : 
        (<button onClick={handleStock}> Out of Stock</button>
      )}
        <button 
            onClick={removeItem}> Remove plant
        </button>
    </li>
  );
}

        //another way of doing the above button
/* <button 
    onClick={handleStock} 
    className={outOfStock ? "primary" : ""}>
    {outOfStock ? "In Stock" : "Out of Stock"}
</button> */

export default PlantCard;