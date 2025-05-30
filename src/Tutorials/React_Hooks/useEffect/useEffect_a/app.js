/* 
--- React useEffect Hooks
- The useEffect Hook allows you to perform side effects in your components
- Some examples of side effects are: fetching data, directly updating the DOM, and timers.
- useEffect accepts two arguments. The second argument is optional
- useEffect(<function>, <dependency>)

- Example: Use setTimeout() to count 1 second after initial render: 

- But wait!!It keeps counting even though it should only count once!
- useEffect runs on every render. That means that when the count changes, a render happens, which then
  triggers another effect.
- This is not what we want. There are several ways to contrl when side effects run
- We should always include the second parameter which accepts an array.
- We can optionally pass dependecies to useEffect in this array
*/ 

import { useState, useEffect } from "react"; 
import ReactDOM from "react-dom/client"; 

function Timer() {
    const [count, setCount] = useState(0); 

    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
    });

    return <h1>I've rendered {count} </h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<Timer />);
