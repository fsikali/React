/* 
--- React useMemo Hook 
- The React useMemo Hook returns a memorixed value
- Think of memorization as caching a value so that it does not need to be recalculated
- The useMemo Hook only runs when one of its dependence update
- This can improve performance
- N/B: The useMemo and useCallback Hooks are similar. The main difference is that useMemo returs a memorized value and
       useCallback returns a memorized function.
--- Performance
- The useMemo Hook can be used to keep expensive, resource intensive functions needlessly running. 
- In this example, we have an expensive function that runs on every render
- When changing the count or adding a todo, you will notice a delay in execution

--- Example: A poor performong function, The expensiveCalculation function runs on every render:
*/ 

import { useState } from "react"; 
import ReactDOM from "react-dom/client"; 

const App = () => { 
    const [count, setCount] = useState(0); 
    const[todos, setTodos]= useState([]);
    const calculation = expensiveCalculation(count); 

    const increment = () => { 
        setCount((c) => c + 1);
    }; 
    const addTodo = () => { 
        setTodos((t) => [...t, "New Todo"]);
    }; 

    return (
        <div>
            <div>
                <h2>My Todos</h2>
                {todos.map((todo, index) => {
                    return <p key={index}>{todo}</p>;
                })}
                <button onClick={addTodo}>Add Todo</button>
            </div>
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
                <h2>Expensive Calculation</h2>
                {calculation}
            </div>
        </div> 
    );
}; 

const expensiveCalculation = (num) => { 
    console.log("Calculation..."); 
    for (let i = 0; i < 100000000; i++) { 
        num += 1;
    } 
    return num;
}; 

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<App />);
