/* 
--- Expressions in JSX
- With JSX you can write expressions inside curly braces { }
- The expression can be a React variable, or property, or any other valid JS expression. JSX will 
  execute the expression and return the result:
- Example: Execute the expression 5 + 5: 
*/

import React from 'react'; 
import ReactDOM from 'react-dom/client'; 

const myElement = ( 
  <di> 
    <h1> React is {5 + 5} times better with JSX  </h1>  
    <p> Hey there </p> 
    <p>Hey I am coming home </p> 
  </di>
);

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(myElement);
