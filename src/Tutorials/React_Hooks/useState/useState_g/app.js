/* 
--- Updating Objects and Arrays in State
- When state is updated, the entire state gets overwritten
- What if we only want to update the color of our car? 
- If we only called setCar({color: "blue"}), this would remove the brand, model, and year from our state.
- We can use the JS spread  operator to help us

- Example: Use the JS spread operator to update only the color of the car: 

- Because we need the current value of state, we pass a function into our setCar function. This function 
  receives the previous value.
- We then return an object, spreading the previousState and overwriting only the color.
*/ 

import { useState } from "react"; 
import ReactDOM from "react-dom/client";

function Car() {
    const [car, setCar] = useState ({
        brand: "Ford",
        model: "Mustang", 
        year: "1964", 
        color: "red",
    });

    const updateColor = () => { 
        setCar(previousState => {
            return { ...previousState, color: "blue" }
        });
    } 

    return (
        <> 
          <h1>My {car.brand}</h1>
          <p>
            It is a {car.color} {car.model} from {car.year}.
          </p> 
          <button 
               type="button" 
               onClick={updateColor}
               >Blue</button>
        </>
    )
} 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);

