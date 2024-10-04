// Function Component 
// A Function component also returns HTML, and behaves the same way as
// a Class component, but Function components can be written using much less code, are easier to 
// understand.

// Example - Create a Function component called Car 

import react from 'react'; 
import ReactDOM from 'react-dom/client';

function Car() { 
    return <h2>Hi, I am a Car!</h2>
} 

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<Car />); 

