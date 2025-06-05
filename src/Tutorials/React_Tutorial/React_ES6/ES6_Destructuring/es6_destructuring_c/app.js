/* 
--- Destructuring Objects
- Here is an old way of using an object inside a function:
- Before: 
*/ 

const vehicleOne = {
    brand: 'Ford', 
    model: 'Mustang', 
    type: 'car', 
    year: 2021,
    color: 'red'
}

myVehicle(vehicleOne); 

// old way 
function myVehicle(vehicle) { 
    const message = 'My ' + vehicle.type + ' is a ' + vehicle.color + ' ' + vehicle.brand + ' ' + vehicle.model + '.'; 
}

