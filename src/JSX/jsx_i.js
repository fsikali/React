// Conditions - if statements 
// Option 2 - Use ternary expressions  

// Example - Write "Hello" if X is less than 10, otherwise "Goodbye": 

import react from 'react'; 
import ReactDOM from 'react-dom/client'; 

const x = 5; 

const myElement = ( 
    <>  
         <h1> { (x) < 10 ? "Hello" : "Goodbye"}</h1>;
    </>
); 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement); 

