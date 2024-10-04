// Attribute class = className 
// The class attribute is a much used attribute in HTML, but since JSX
// is rendered as JavaScript, and the class keyword is reserved word in JavaScript, 
// you are not allowed to use in JSX.

// N/B - Use attribute className instead.  

// JSX solved this by using className instead. When JSX is rendered, it translates className 
// attributes into class attributes 

import react from 'react'; 
import ReactDOM from 'react-dom/client'; 

const myElement = ( 
    <>     
         <h1 className="myclass"> Hello Tech bro</h1>;
    </>
); 

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(myElement); 



