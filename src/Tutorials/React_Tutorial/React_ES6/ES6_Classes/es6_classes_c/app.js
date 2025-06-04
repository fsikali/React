/* 
--- Method in Classes
- You can add your own methods in a class:
- Example: Create a method named "present":  

- You call the method by referring to the object's method name followed by parentheses
  (parameters would go inside the parentheses.)
*/ 

class Car { 
    constructor(name) {
        this.brand = name;
    }

    present() {
        return 'I have a ' + this.brand;
    }
} 

const mycar = new Car("Ford"); 
mycar.present();
