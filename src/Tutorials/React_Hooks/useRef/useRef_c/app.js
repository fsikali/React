/* 
--- Tracking State Changes
- The useRef Hook can also be used to keep track of previous state values
- This is because we are to persist useRef values between renders
- Example: Use useRef to keep track of previous state values:

- This time we use a combination of useState, useEffect, and useRef to keep track of the previous state.
- In the useEffect, we are updating the useRef current value each time the inputValue is updated by entering
  text into the input field.  
*/ 

import React, { useState, useEffect, useRef } from "react"; 
import ReactDOM from "react-dom/client"; 

function App() {
    const [inputValue, setInputValue] = useState("");
    const previousInputValue = useRef("");

    useEffect(() => {
        previousInputValue.current = inputValue;
    }, [inputValue]);

    return (
        <>
          <input 
           type="text" 
           value={inputValue} 
           onChange={(e) => setInputValue(e.target.value)} 
           />
           <h2>Current Value: {inputValue}</h2>
           <h2>Previous Value: {previousInputValue.current}</h2>
        </>
    );
} 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
