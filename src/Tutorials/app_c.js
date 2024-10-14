import react from 'react'; 
import ReactDOM from 'react-dom/client'; 

// Destructuring an array, when a function returns an array 

function calculate(a, b) { 
    const add = a + b; 
    const subtract = a - b; 
    const multiply = a * b; 
    const divide = a / b; 

    return [add, subtract, multiply, divide];
} 

const [add, subtract, multiply, divide] = calculate(4, 7);

const myElement = ( 
    <>   
       <p> Sum : { (add) }</p> 
       <p> Difference : {(subtract)}</p> 
       <p> Product : {(multiply)}</p> 
       <p> Quotient : {(divide)}</p> 

       <h1> My name is FLEMMING SIKALI </h1>
    </>
); 

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(myElement);  

