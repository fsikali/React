/* 
--- Conditions - if statements
- React supports if statements, but not inside JSX
- To be able to use conditional statements in JSX, you should put the if statements outside of the JSX, 
  or you could use ternary expression instead:

- Option 1:
- Write if statements outside of the JSX code:

- Example: Write "Hello" if x is less than 10, otherwise "Goodbye":
*/ 

const x = 5; 
let text = "Goodbye"; 
if (x < 10) { 
    text = "Hello";
} 

const myElement = <h1>{text}</h1>;

