/* 
--- React ES6 Classes
- ES6 introduced classes
- A class is a type of function, but instead of using the keyword function to initiate it, we use the 
  keyword class, and the properties are assigned inside a constructor() method.
- Example: A simple class constructor: 

- N/B: The case of the class name. We have begun the name, "Car", with an uppercase character.
       This is a standard naming convention for classes.
*/

class Car {
    constructor(name) {
        this.brand = name;
    }
}

