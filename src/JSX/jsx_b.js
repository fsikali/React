// Expressions in JSX 
// With JSX you can write expressions inside curly braces { } 
// The expression can be React variable, or property, or any other valid JS expression 
// JSX will execute the expression and return the result 

import react from 'react'; 
import ReactDOM from 'react-dom/client'; 

const myElement = <h1> React is { 5 + 5} times better with JSX </h1> 

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(myElement); 
