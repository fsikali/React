/* 
- Use ternary expressions instead
- Example: Write "Hello" if x is less than 10, otherwise "Goodbye":  
- N/B: In order to embed a JS expression inside JSX, the JS must be wrapped with curly braces, {}.
*/

const x = 5; 
const myElement = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>;

const z = 10; 