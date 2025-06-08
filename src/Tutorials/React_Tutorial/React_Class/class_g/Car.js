/* 
--- Components in Files
- React is all about re-using code, and it can be smart to insert some of your components in separate files
- To do that, create a new file with a .js file extension and put the code inside it:
- N/B: The file must start by importing React(as before), and it has to end with the statement export default Car;
- Example: This is the new file, we named it Car.js:
- To be able to use the Car component, you have to import the file in your application.
*/

import React from 'react'; 

class Car extends React.Component {
    render() {
        return <h2>Hi, I am a Car!</h2>;
    }
}

export default Car;
