/* 
--- React Class Components
- Before React 16.8, Class components were only way to track state and lifecycle on a React component.
  Function components were considered "state-less".
- With the addition of Hooks, Function components are now almost equivalent to Class components. The 
  differences are so minor that you will probably never need to use a Class components from React.
- Even though Function components are preferred, there are no current plans on removing Class components
  from React.

--- React Components
- Components are independent and reusable bits of code. They serve the same purpose as JS functions, but work
  in isolation and return HTML via a render() function.
- Components come in two types, Class components and Function components.

--- Create a Class Component
- When creating a React component, the component's name must start with an upper case letter.
- The component has to include the extends React.Component statement, this statement creates an inheritance
  to React.Component, and gives your component access to React.Component's functions. 
- The component also requires a render() method, this method returns HTML.
- Example: Create a Class component called Car

- Now your React application has a component called Car, which returns a <h2> element. 
- To use this component in your application, use similar syntax as normal HTML: <Car />
*/

class Car extends React.Component {
    render() {
        return <h2>Hi, I am a Car!</h2>;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<Car />);

