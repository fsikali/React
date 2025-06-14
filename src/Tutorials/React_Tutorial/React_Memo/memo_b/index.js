/* 
--- Solution 
- To fix this, we can use memo
- Use memo to keep the Todos component from needlessly re-rendering
- Wrap the Todos component export in memo: 
*/

import { useState } from "react"; 
import ReactDOM from "react-dom/client"; 
import Todos from "./Todos";

const App = () => {
    const [count, setCount] = useState(0); 
    const [todos, setTodos] = useState(["todo i", "todo 2"]);

    const increment = () => {
        setCount((c) => c + 1);
    }; 

    return (
        <> 
          <Todos todos={todos} />
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
