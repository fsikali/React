// Components in Components
// We can refer components inside other components 

// Example - Use the Car component inside the Garage component

import react from 'react'; 
import ReactDOM from 'react-dom/client'; 

function Car() { 
    return <h2>I am a Car!</h2>
} 

function Garage() { 
    return ( 
        <>    
            <h1>Who lives in my Garage?</h1>  
            <Car/>
        </>
    );
} 

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<Garage />);

