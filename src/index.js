import react from 'react'; 
import ReactDOM from 'react-dom/client';  

// Destructuring deeply nested objects  

const vehicleOne = { 
    brand: 'Ford', 
    model: 'Mustang', 
    type: 'car', 
    year: '2021', 
    color: 'red', 
    registration: { 
        country: 'Kenya', 
        county: 'Nairobi', 
        sub_county: 'Embakasi',
    } 
}

myVehicle(vehicleOne) 

function myVehicle({model, registration: { country } }) {  
    const message = 'My ' + model + ' is registered in ' + country + ' . '; 

    const root = ReactDOM.createRoot(document.getElementById('root')); 
    root.render(message);
}

