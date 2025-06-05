/* 
--- We can even destructure deeply nested objects by referencing the nested object then using a colon
    and curly braces to again destructure the items needed from the nested object: 
*/ 

const vehicleOne = { 
    brand: 'Ford', 
    model: 'Mustang', 
    type: 'car', 
    year: 2021, 
    color: 'red', 
    registration: {
        city: 'Houston', 
        state: 'Texas', 
        country: 'USA',
    }
}

myVehicle(vehicleOne)

function myVehicle({ model, registration: { state }  }) {
    const message = 'My ' + model + ' is registered in ' + state + '.';
} 

