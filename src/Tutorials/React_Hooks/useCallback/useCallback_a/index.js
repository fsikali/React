/* 
--- React useCallback Hook
- The React useCallback Hook returns a memorized callback function
- Think of memoization as caching a value so that it does not need to be recalculated
- This allows use to isolate resource intensive functions so that they will not automatically run on every render
- The useCallback Hook only runs when one of its dependencies update
- This can improve performance
- N/B: The useCallback and useMemo Hooks are similar. The main difference is that useMemo returns a memorized 
       value and useCallback returns a memorized function. 

--- Problem
- One reason to use useCallback is prevent a component from re-rendering unless its props have changed
- In this example, you might think that the Todos component will not re-render unless the todos change:
- This is a similar example to the one in the React.memo section.

--- Example: index.js
- Try running this and click the count increment button 
- You will notice that the Todos component re-renders even when the todos do not change
- Why does this not work? We are using memo, so the Todos component should not re-render since neither the todos
  state nor the addTodo function are changing when the count is incremented
- This is because of something called "referential equality" 
- Every time a component re-renders, its functions get recreated. Because of this, the addTodo function has
  actually changed. 
*/

import { useState } from "react"; 
import ReactDOM from "react-dom/client"; 
import Todos from "./Todos"; 

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  }; 
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  }; 

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
