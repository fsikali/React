/*
--- Or, we can just use one state and include an object instead!
- Example: Create a single Hook that holds an object:  

- N/B: Since we are now tracking a single object, we need to reference that object and then the property of
       that object when rendering the component.(Ex: car.brand)
*/ 

import React, { useState } from "react"; 
import ReactDOM from "react-dom/client"; 

function Car() {
    const [car, setCar] = useState({
        brand: "Ford", 
        model: "Mustang", 
        year: "1964", 
        color: "red"
    });

    return (
        <>
          <h1>My {car.brand}</h1>
          <p>
            It is a {car.color} {car.model} from {car.year}.
          </p>
        </>
    )
} 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);
