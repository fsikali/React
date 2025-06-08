/* 
--- Changing the State Object
- To change a value in the state object, use the this.setState() method
- When a value in the state object changes, the component will re-render, meaning that the output will change
  according to the new value(s).
- Example: Add a button with an onClick event that will change the color property: 
- N/B: Always use the setState() method to change the state object, it will ensure that the component
       knows its been updated and calls the render() method(and all the other lifecycle methods).
*/

class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "Ford", 
            model: "Mustang", 
            color: "red", 
            year: 1964
        };
    }
    changeColor = () => {
        this.setState({color: "blue"});
    } 
    render() {
        return (
            <div>
                <h1>My {this.state.brand}</h1>
                <p>
                    It is a {this.state.color}
                    {this.state.model}
                    from {this.state.year}.
                </p>
                <button 
                type="button"
                onClick={this.changeColor}
                >Change color</button>
            </div>
        );
    }
}

