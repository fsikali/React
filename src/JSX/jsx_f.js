// Elements must be closed 
// JSX follows XML rules, and therefore HTML elements must be properly closed 

// Example - Close empty elements with />  

import react from 'react'; 
import ReactDOM from 'react-dom/client';

const myElement = (  
       <>  
            <label for="fname">Enter first name: </label> 
            <input type="text" /> 
            <label for="fname"> Enter second name: </label> 
            <input type="text" /> 
            <button>Submit </button>
       </> 
);

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(myElement);  

