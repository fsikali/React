/*
--- Read State
- We can now include our state anywhere in our component
- Example: Use the state variable in the rendered component
*/ 

import { useState } from "react";
import ReactDOM from "react-dom/client";

function FavoriteColor() { 
    const [color, setColor] = useState("red");

    return <h1>My favorite color is {color}!</h1>
} 

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<FavoriteColor />);

function FavoriteColor() {
    const[set, setColor] = useState("red"); 

    return (
        <> 
        <h1>My favorite color is {color}!</h1> 
        <button onClick={() => setColor("blue")}>Blue</button>
        </>
    )
}

