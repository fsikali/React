// Components are like functions that return HTML elements
// Components are independent and reusable bits of code
// They serve the same purpose as JavaScript functions, but work in 
// isolation and return HTML 
// Components come in two types - Class Components
//                              - Function components 
// 

// React components name MUST start with an upper case letter 

// --- Class Component ---
// A class component must include the extends React.Component statement
// This statement creates an inheritance to React Component, and gives your
// component access to React Component's functions 
// The component also requires a render() method, this method returns HTML 

// Example - Create a Class component called Car 

import react from 'react'; 
import ReactDOM from 'react-dom/client'; 

class Car extends React.Component { 
    render() { 
        return <h2> Hi, I am a Car!</h2>;
    }
} 

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<Car />); 

