/* 
--- Destructuring comes in handy when a function returns an array 
*/ 

function calculate(a, b) {
    const add = a + b; 
    const subtract = a - b; 
    const multiply = a * b; 
    const divide = a / b; 

    return [add, subtract, multiply, divide];
} 

const [add, subtract, multiply, divide] = calculate(4, 7);

