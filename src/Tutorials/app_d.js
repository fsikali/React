import react from 'react'; 
import ReactDOM from 'react-dom/client'; 

// Spread Operator - (...) allows us to quickly copy all or part of an existing array
// or object into another array or object 

const numbersOne = [1, 2, 3]; 
const numbersTwo = [4, 5, 6]; 
const numbersCombined = [...numbersOne, ...numbersTwo];

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(numbersCombined); 

