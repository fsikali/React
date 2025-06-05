/*
--- Default Exports
- Let us create another file, named message.js, and use it for demostrating default export
- You can only have one default export in a file.
- Example: message.js 
*/ 

const message = () => {
    const name = "Jesse"; 
    const age = 40; 
    return name + ' is ' + age + 'years old.';
}; 

export default message;
