// Inserting a Large Block of HTML 
// To write HTML on multiple lines, put the HTML inside parentheses 

// Example create a list with three list items  

import react from 'react'; 
import ReactDOM from 'react-dom/client'; 

const myElement = ( 
    <ul> 
        <li>Apples</li> 
        <li>Bananas</li> 
        <li>Cherries</li>
    </ul>
); 

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(myElement);