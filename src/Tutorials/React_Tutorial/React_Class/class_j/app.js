/* 
--- Using the state Object
- Refer to the state object anywhere in the component by using the this.state.propertyname syntax: 
- Example: Refer to the state object in the render() method:
*/

class Car extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            brand: "Ford", 
            model: "Mustang", 
            color: "red",
            year: 1901
        };
    }
    render() {
        return (
            <di>
                <h1>My {this.state.brand}</h1>
                <p>
                    It is a {this.state.color}
                    {this.state.model}
                    from {this.state.year}.
                </p>
            </di>
        );
    }
}

