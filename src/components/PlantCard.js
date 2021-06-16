import React from "react";
import { useState } from "react";


function PlantCard({image, name, price}) {
  const [soldout, setSoldout] = useState(true)

  function soldoutButton(){
    setSoldout(soldout => !soldout)
  }

  return (
    <li className="card">
        <img src={image} alt={name} />
        <h4>{name}</h4>
        <p>Price: {price}</p>

        {soldout ? 
        (<button className="primary" onClick={soldoutButton}> 
          In Stock</button>) : 
        (<button onClick={soldoutButton} >Out of Stock</button>)
    }

      {/* <button 
        className={outOfStock ? "" : "primary"}
        onClick={handleOutOfStock}>{outOfStock ? "Out of Stock" : "In Stock"}
      </button> */}

    </li>
  );
}




export default PlantCard;
