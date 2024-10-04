import react from 'react'; 
import ReactDOM from 'react-dom/client'; 

// The spread operator is often used in combination with destructuring  
// Example - Assign the first second items from numbers to variables and put the
// rest in an array 

const numbers = [1, 2, 3, 4, 5, 6]; 
const [one, two, ...rest] = numbers;   

const myElement = ( 
    <>  
         <p> {(one)} </p>
         <p> {(two)} </p> 
         <p> {(rest)} </p>
    </> 
);

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(myElement); 

