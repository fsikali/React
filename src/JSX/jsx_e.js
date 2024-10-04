// Using a fragment to wrap multiple lines. 
// This will prevent unnecessarily adding extra nodes to the DOM 

import react from 'react'; 
import ReactDOM from 'react-dom/client';

const myElement = ( 
    <> 
         <p>I am a software developer</p> 
         <p>I am writing react jsx syntax</p> 
    </>
); 

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(myElement); 
 


