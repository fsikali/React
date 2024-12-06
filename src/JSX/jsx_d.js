// One Top Level Element 
// The HTML code must be wrapped in ONE top level element 
// So if you like to write two paragraphs, you must put them inside a parent element, like a div element  

// Example - Wrap the paragraphs inside one DIV element

import react from 'react'; 
import ReactDOM from 'react-dom/client'; 

const myElement = ( 
    <div> 
        <p>I am a paragraph.</p> 
        <p>I am a paragraph too.</p>
    </div>
); 

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(myElement); 
