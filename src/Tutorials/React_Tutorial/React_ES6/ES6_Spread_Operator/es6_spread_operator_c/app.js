/* 
- We can use the spread operator with objects too: 
- N/B: The properties that did not match were combined, but the property that did match, color, was
       overwritten by the last object that was passed, updateMyVehicle.The resulting color is now yellow
- Example: Combine these two objects: 
*/ 

const myVehicle = {
    brand: 'Ford', 
    model: 'Mustang', 
    color: 'red',
}

const updateMyvehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow',
} 

const myUpdateVehicle = {...myVehicle, ...updataMyVehicle}
