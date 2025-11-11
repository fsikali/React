/* 
--- Setting up a React Environment
- If you have npx and Node.js installed, you can create a React application by using create-react-app
- N/B: If you've previously installed create-react-app globally, it is recommended that you uninstall the package
       to ensure npx always uses the latest version of create-react-app
       To uninstall, run this command: npm uninstall -g create-react-app
- Run this command to create a React application named my-react-app: npx create-react-app my-react-app
- The create-react-app will set up everything you need to run a React application. 

--- Run the React Application
- Now you are ready to run your first real React application
- Run this command to move to the my-react-app directory: cd my-react-app
- Run this command to run the React application my-react-app: npm start
- A new browser window will pop up with your newly created React App!If not, open your browser and
  type localhost:3000 in the address bar.

--- Modify the React Application
- In my-react-app directory, inside the src folder, there is a file called App.js, change the HTML content and
  save the file.
*/ 

import logo from '.logo.svg'; 
import './App.css'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code></p> and save to reload. 
        <a 
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        > 
          Learn React
        </a> 
      </header>
    </div>
  ); 
}

export default App;
