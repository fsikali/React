/*
--- React useRef Hook
- The useRef Hook allows you to persist values between renders
- It can be used to store a mutable value that does not cause a re-render when updated
- It can be used to access a DOM element directly

--- Does Not Cause Re-renders
- If we tried to count how many times our application renders using the useState Hook, we would be 
  caught in an infinite loop since this Hook itself causes a re-render.
- To avoid this, we can use the useRef Hook

--- Example: 
- Use useRef to track application renders

- useRef() only returns one time. It returns an Object called current
- When we initialize useRef we set the initial value: useRef(0)
- It's like doing this: const count = {current: 0}. We can access the count by using count.current
- Run this on your computer and try typing in the input to see the application render count increase
*/

import { useState, useEffect, useRef } from "react"; 
import ReactDOM from "react-dom/client"; 

function App() {
    const [inputVale, setInputVale] =useState("");
    const count = useRef(0); 

    useEffect(() => {
        count.current = count.current + 1;
    }); 

    return (
        <> 
          <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
         />
         <h1>Render Count: {count.current}</h1>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<App />);
