/* 
--- getDerivedStateFromProps
- The getDerivedStateFromProps() method is called right before rendering the element(s) in the DOM.
- This is the natural place to set the state object based on the initial props
- It takes state as an argument, and returns an object with changes to the state
- The example below starts with the favorite color being "red", but the getDerivedStateFromProps() method updates the
  favorite color based on the favcol attribute:
- Example: The getDerivedStateFromProps method is called right before the render method: 
*/

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
    }
    static getDerivedStateFromProps(props, state) {
        return {favoritecolor: props.favcol };
    }
    render() {
        return (
            <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<Header favcol="yellow"/>);

