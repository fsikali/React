/* 
--- Example: Create an object called "mycar" based on the Car class:   
- N/B: The constructor function is called automatically when the object is initialized
*/

class Car { 
    constructor(name) {
        this.brand = name;
    }
} 

const mycar = new Car("Ford");
