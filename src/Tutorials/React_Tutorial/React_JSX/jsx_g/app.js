/* 
--- Elements Must be Closed
- JSX follows XML rules, and therefore HTML elements must be properly closed
- Example: Close empty elements with />

- N/B: JSX will throw an error if the HTML is not properly closed
*/ 

import React from 'react'; 
import ReactDOM from 'react-dom/client'; 

const myElement = <input type="text" />;

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(myElement);
