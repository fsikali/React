/* 
--- Example: With an arrow function, this represents the Header object no matter who called the function:  
- Remember these difference when you are working with functions. Sometimes the behavior of regular functions
  is what you want, if not, use arrow functions.
*/ 

class Header { 
    constructor() { 
        this.color = "Red";
    }

    // Arrow function:
    changeColor = () => {
        document.getElementById("example").innerHTML += this;
    }
}  

const myheader = new Header(); 

// The window object calls the function: 
window.addEventListener("load", myheader.changeColor); 

// A button object calls the function:
document.getElementById("btn").addEventListener("click", myheader.changeColor); 

