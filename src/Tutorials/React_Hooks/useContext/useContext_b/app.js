/*
--- The Solution
- The solution is to create context

--- Create Context
- To create context, you must import createContext and initialize it:
- Next we'll use the Context Provider to wrap the tree of the components that need the state Context.

--- Context Provider
- Wrap child components in the Context Provider and supply the state value
- All components in this tree will have access to the user Context

--- Use the useContext Hook 
- In order to use the Context in a child component, we need to access it using the useContext Hook
- Include the useContext in the import statement:
- Access the user Context in all components: 

--- Full Example:
- Here is the full example using React Context:
*/

import { useState, createContext, useContext } from "react"; 
import ReactDOM from "react-dom/client";

const UserContext = createContext();

function Component1() {
    const [user, setUser] = useState("Jesse Hall");

    return (
        <UserContext.Provider value={user}>
            <h1>{`Hello ${user}!`}</h1>
            <Component2 />
            </UserContext.Provider>
    );
}

function Component2() {
    return (
        <> 
          <h1>Component 2</h1>
          <Component3 />
        </>
    );
} 

function Component3() {
    return (
        <> 
          <h1>Component 3</h1>
          <Component4 />
        </>
    );
}

function Component4() {
    return (
        <> 
          <h1>Component 4</h1>
          <Component5 />
        </>
    );
}

function Component5() {
    const user = UserContext(UserContext);

    return (
        <> 
          <h1>Component</h1>
          <h2>{`Hello ${user} again!`}</h2>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Component1 />);
