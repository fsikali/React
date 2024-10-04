import react from 'react'; 
import ReactDOM from 'react-dom/client'; 

// We can use the spread operator with objects too  
// Example - combine these two objects

const myVehicle = { 
    brand: 'Ford', 
    model: 'Mustang', 
    color: 'red'
} 

const updateMyVehicle = { 
    type: 'car', 
    year: 2021, 
    color: 'yellow'
}   

const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle};

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(myUpdatedVehicle); 
