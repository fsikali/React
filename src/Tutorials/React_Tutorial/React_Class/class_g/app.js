/* 
- Example: Now we import the Car.js file in the application, and we can use the Car component as if it
           was created here. 
*/

import React from 'react'; 
import ReactDOM from 'react-dom/client'; 
import Car from './Car.js'; 

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<Car />);

