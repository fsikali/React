// JSX stands for JavScript XML 
// JSX allows us to write HTML in React 
// JSX makes it easier to write and add HTML in React 
// JSX allows us to write HTML elements in JavaScript and place them in the DOM without
// any createElement() and/or appendChild() methods 
// JSX converts HTML tags into react elements 
// JSX is an extension of the JavaScript language based on ES6, and is translated into regular
// JavaScipt at runtime 

// Example 

import react from 'react'; 
import ReactDOM from 'react-dom/client'; 

const myElement = <h1> My name is John Tech </h1> 

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(myElement); 

