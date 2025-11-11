/*  
--- React Components
- Components are independent and reusable bits of code. They serve the same purpose as JS functions,
  but work in isolation and return HTML.
- Components come in two types, Class components and Function components, in this tutorial we will
  concentrate on Function components.
- N/B: In older React code bases, you may find Class components primarily used. It is now suggested to use
       Function components along with Hooks, which were added in React 16.8. There is an optional section on
       Class components for your reference.

--- Create Your First Component
- When creating a React component, the component's name MUST start with an upper case letter.

--- Class Component
- A class component must include the extends React.Component statement. This statement creates an inheritance
  to React.Component, and gives your component access to React.Component's functions. 
- The component also requires a render() method, this method returns HTML.
- Example: Create a Class component called Car
*/ 

class Car extends React.Component { 
    render() {
        return <h2>Hi, I am a Car!</h2>;
    }
}

