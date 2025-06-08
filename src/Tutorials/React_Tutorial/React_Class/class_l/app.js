/* 
--- Lifecycle of Components
- Each component in React has a lifecycle which you can monitor and manipulate during its three main phases
- The three phases are: Mounting, Updating, and Unmounting

--- Mounting
- Mounting means putting elements into the DOM
- React has four built-in methods that gets called, in this order, when mounting a component:
1.constructor()
2.getDerivedStateFromProps()
3.componentDidMount() 

- The render() method is required and will always be called, the others are optional and will be called 
  if you define them.

--- construtor
- The constructor() method is called before anything else, when the component is initiated, and it is the natural
  place to set up the initial state and other initial values. 
- The constructor() method is called with the props, as arguments, and you should always start by calling the
  super(props) before anything else, this will initiate the parent's constructor method and allows the 
  component to inherit methods from its parent(React.Component).
- Example: The constructor method is called, by React, every time you make a component:
*/

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
    }
    render() {
        return (
            <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />);

