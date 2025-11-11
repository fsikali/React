/* 
--- Class Inheritance
- To create a class inheritance, use the extends keyword
- A class created with a class inheritance inherites all the methods from another class:
- Example: Create a class named "Model" which will inherit the methods from the "Car" class: 

- The super() method refers to the parent class
- By calling the super() method in the construtor method, we call the parent's constructor method and gets
  access to the parent's properties and methods
*/ 

class Car {
    constructor(name) {
        this.brand = name;
    }
    
    present() {
        return 'I have a ' + this.brand;
    }
}

class Model extends Car {
    constructor(name, mod) {
        super(name); 
        this.model = mod;
    }
    show() {
        return this.present() + ', it is a ' + this.model
    }
}

const mycar = new Model("Ford", "Mustang"); 
mycar.show();
