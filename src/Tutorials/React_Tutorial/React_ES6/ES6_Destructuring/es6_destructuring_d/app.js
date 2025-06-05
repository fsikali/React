/* 
--- Here is the new way of using an object inside a function:
- N/B: The object properties do not have to be declared in a specific order
- With destructuring: 
*/

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
}
