/* 
--- React ES6 Destructuring
- Only the necesary items 
- It makes it easy to extract only what is needed

--- Destructing Arrays
- Here is the old way of assigning array items to a variable:
- When destructuring arrays, the order that variables are declared is important 
- If we only want the car and suv we can simply leave out the truck but keep the comma:
*/

// Before: 

const vehicles = ['mustang', 'f-150', 'expedition']; 

// old way
const car = vehicles[0];
const truck = vehicles[1];
const suv = vehicles[2];

// Here is the new way of assiging array items to a variable
// With destructuring:

const vehicles_a = ['mustang', 'f-150', 'expedition'];
const [car_a, truck_a, suv_a] = vehicles_a

// With destructuring

const vehicles_b = ['mustang', 'f-150', 'expedition']; 
const [car_b,, suv_b] = vehicles;
