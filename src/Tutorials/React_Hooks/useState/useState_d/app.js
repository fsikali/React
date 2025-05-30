/* 
--- Update State
- To update our state, we use our state updater function
- We should never directly state. Ex: color = "red" is not allowed 

- Example: Use a button to update the state:
*/  

import { useState } from "react"; 
import ReactDOM from "react-dom/client"; 

function FavoriteColor() {
    const [color, setColor] = useState("red");

    return (
        <> 
          <h1>My favorite color is {color}!</h1>
          <button type="button" onClick={() => setColor("blue")}>Blue</button>
        </>
    )
} 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavoriteColor />);
