/* 
--- Props in the Constructor
- If your component has a constructor function, the props should always be passed to the 
  construtor and also to the React.Component via the super() method.
- Example: 
*/

class Car extends React.Component { 
    constructor(props) {
        super(props);
    } 
    render() {
        return <h2> I am {this.props.model}!</h2>;
    } 
} 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car model="Mustang"/>); 
 