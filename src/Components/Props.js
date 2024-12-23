// Props 
// Components can be passed as props, which stands for properties
// Props are like function arguments, and you send them into the components as attributes

// Example - Use an attribute to pass a color to the Car component, and use it in the render() function 

import react from 'react'; 
import ReactDOM from 'react-dom/client'; 

function Car(props) { 
    return <h2>I am a {props.color} Car!</h2>;
} 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car color="red"/>); 
