/* 
- Use the color property in the render() function:
- Example:
*/ 

class Car extends React.Component {
    constructor() {
        super(); 
        this.state = {color: "red"};
    } 
    render() {
        return <h2>I am {this.state.color} Car!</h2>;
    }
}




