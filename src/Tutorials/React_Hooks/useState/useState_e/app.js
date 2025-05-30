/* 
--- What Can State Hold
- The useState Hokk can be used to keep track strings, numbers, booleans, arrays, objects
  and any combination of these!
- We could create multiple state Hooks to track individual values
- Example: Create multiple state Hooks: 
*/ 

import { useState } from "react"; 
import ReactDOM from "react-dom/client"; 

function Car() {
    const [brand, setBrand] = useState("Ford");
    const [model, setModel] = useState("Mustang");
    const [year, setYear] = useState("1964");
    const [color, setColor] = useState("red");

    return (
        <> 
          <h1>My {brand}</h1>
          <p>
            It is a {color} {model} from {year}.
          </p>
        </>
    )
} 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);
