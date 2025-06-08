/*
--- Props
- Another way of handling component properties is by using props
- Props are like function arguments, and you send them into the component as attributes
- Example: Use an attribute to pass a color to the Car component, and use it in the render() function: 
*/

class Car extends React.Component {
    render() {
        return<h2>I am a {this.props.color} Car!</h2>;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<Car color="red" />);

