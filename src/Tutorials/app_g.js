import react from 'react'; 
import ReactDOM from 'react-dom/client'; 

// Ternary Operator  
// The ternary operator is a simplified conditional operator like if / else  


const renderApp = () => {
    return "Welcome!";
  }
  
const renderLogin = () => {
    return "Please log in";
  } 

let authenticated = true; 

authenticated ? renderApp() : renderLogin();

  
const root = ReactDOM.createRoot(document.getElementById('root')); 
 // root.render(renderApp()); 
//  root.render(renderLogin()); 
root.render(authenticated);

