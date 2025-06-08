/*
--- Updating
- The next phase in the lifecycle is when a component is updated
- A component is updated whenever  there is a change in the component's state or props. 
- React has five built-in methods that get called, in this order, when a component is update:
1. getDerivedStateFromProps()
2. shouldComponentUpdate() 
3. render() 
4. getSnapshotBeforeUpdate( 
5. componentDidUpdate() 

- The render() method is required and will always be called, the others are optional and will be 
  called if you define them.

--- getDerivedStateFromProps
- Also at updates the getDerivedtateFromProps method is called. This is the first method that is called when 
  a component gets updated
- This is still the natural place to set the state object based on the initial props
- The example bewloe has a button that changes the favorite color to blue, but since the getDerivedStateFromProps() method
  is called, which updates the state with the color from the favcol attribute, the favorite color is still rendered
  as yellow:
- Example: If the component gets updated, the getDerivedStateFromProps() method is called:
*/

class Header extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {favoritecolor: "red"};
    }
    static getDerivedStateFromProps(props, state) {
        return {favoritecolor: props.favcol };
    }
    changeColor = () => { 
        this.setState({favoritecolor: "blue"});
    }
    render () { 
        return (
            <div>
                <h1>My Favorite Color is {this.state.favoritecolor}</h1>
                <button type="button" onClick={this.changeColor}>Change color</button>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<Header favcol="yellow " />);
