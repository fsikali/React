/*  
--- Solution 
- To fix this, we can use the useCallback hook to prevent the function from being recreated unless necessary. 
- Use the useCallback Hook to prevent the Todos component from re-rendering needlessly:
- Example: index.js
*/   

import React, { useState, useCallback } from "react"; 
import ReactDOM from "react-dom/client"; 
import Todos from "./Todos"; 

const App = () => { 
    const [count, setCount] = useCount(0); 
    const [todos, setTodos] = useState([]); 

    const increment = () => { 
        setCount(() => c + 1); 
    }; 
    const addTodo = useCallback(() => { 
        setTodos((t) => [...t, "New Todo"]);
    }, [todo]); 

    return (
        <>
          <Todos todos={todos} addTodo={addTodo} />
          <hr />
          <div>
            Count: {count} 
            <button onClick={increment}>+</button>
          </div>
        </>
    );
}; 

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<App />);

