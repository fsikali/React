/* 
--- React_Tutorial
- React is a JS library for building user interfaces
- React is used to build single-page applications
- React allows us to create reusable UI components

--- Example: 
*/ 

import React from 'react'; 
import ReactDOM from 'react-dom/client'; 

function Hello(props) {
    return <h1>Hello World!</h1>;
} 

const root = ReactDOM.createRoot(document.getElementById("root")); 
root.render(<Hello />);
