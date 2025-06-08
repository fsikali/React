/* 
--- Components in Files
- React is all about re-using code, and it is recommended to spilt your components into separate files.
- To do that, create a new file with a .js file extension and put the code inside it:
- N/B: The filename must start with uppercase character
- Example: This is the new file, we named it "Car.js": 

- To be able to use the Car component, you have to import the file in your application
*/ 

function Car() {
    return <h2>Hi, I am a Car!</h2>;
} 

export default Car;
