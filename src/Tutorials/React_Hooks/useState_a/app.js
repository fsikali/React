/* 
--- Initialize useState
- We initialize our state by calling useState in our function component
- useState accepts an initial state and returns two values:
  - The current state
  - A function that updates the state

- Example: Initialize state at the top of the function component. 

- N/B: That again, we are destructuring the returned values from useState
- The first value, color, is our current state
- The second value, setColor, is the function that is used to update our state

- N/B: These names are variables that can be named anything you would like
- Set the initial state to an empty string: useState("")
*/ 

import { useState } from "react"; 

function FavoriteColor() { 
    const [color, setColor] = useState("");
}
