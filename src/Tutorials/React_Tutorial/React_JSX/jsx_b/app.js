/* 
--- Example: without JSX
- JSX is an extension of the JS language based on ES6, and is translated into regular JS at runtime
*/ 

const myElement = React.createElement('h1', {}, 'I do not use JSX!'); 

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(myElement);
