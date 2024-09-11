import react from 'react'; 
import ReactDOM from 'react-dom/client';  

// destructuring an object

const vehicleOne = { 
    brand: 'Ford', 
    model: 'Mustang', 
    type: 'car', 
    year: 2021, 
    color: 'red',
} 

myVehicle(vehicleOne); 

function myVehicle({type, color, brand, model}) { 
const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.'; 

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(message); 
}  


