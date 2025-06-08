/* 
- The state object can contain as many properties as you like:
- Example: Specify all the properties your component need:
*/ 

class Car extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            brand: "Ford", 
            model: "Mustang", 
            color: "red", 
            year: "1900"
        };
    }
    render() {
        return (
            <div>
                <h1>My Car</h1>
            </div>
        );
    }
}
