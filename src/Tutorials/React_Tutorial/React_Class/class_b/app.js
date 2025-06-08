/* 
--- Component Construtor
- If there is a constructor() function in your component, this function will be called when the 
  component gets initiated.
- The constructor function is where you initiate the component's properties
- In React, component properties should be kept in an object called state
- The constructor function is also where you honor the inheritance of the parent component by including
  the super() statement, which executes the parent component's constructor function, and your component has
  access to all the functions of the parent component(React.Component).
- Example: Create a constructor function in the Car component, and add a color property.
*/


class Car extends React.Component {
  constructor() {
    super(); 
    this.state = {color: "red"};
  }
  render() {
    return <h2>I am a Car!</h2>;
  }
}

