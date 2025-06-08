/* 
--- React Class Component State
- React Class components have a built-in state object
- The state object is where you store property values that belongs to the component
- When the state object changes, the component re-renders 

--- Creating the state Object
- Example: Specify the state object in the constructor method:
*/ 

class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {brand: "Ford"};
    }
    render() {
        return (
            <div>
                <h1>My Car</h1>
            </div>
        );
    }
}
