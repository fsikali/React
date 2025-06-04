/* 
--- What About this?
- The handling of this is also different in arrow functions compared to regular functions
- With arrow functions there is no binding of this
- In regular functions the this keyword represented the object that called the function, which could be the
  window, the document, a button or whatever.
- With arrow functions, the this keyword always represents the object that defined the arrow function 

- Example: With regular function, this represents the object that called the function
*/ 

class Header { 
    constructor() { 
        this.color = "Red";
    }

    // Regular function: 
    changeColor = function() { 
        document.getElementById("example").innerHTML += this;
    }
}

const myheader = new Header(); 

// The window object calls the function: 
window.addEventListener("load", myheader.changeColor); 

// A button object calls the function:
document.getElementById("btn").addEventListener("click", myheader.changeColor);
