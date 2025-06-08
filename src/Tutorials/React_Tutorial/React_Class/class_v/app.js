/* 
--- componentDidUpdate
- The componentDidUpdate method is called after the component is updated in the DOM
- When the component is mounting it is rendered with the favorite color "red" 
- When the component has been mounted, a timer changes the state, and the color becomes "yellow"
- This action triggers the update phase, and since this component has a componentDidUpdate method, this
  method is executed and writes a message in the empty DIV element:
- Example: The componentDidUpdate method is called after the update has been rendered in the DOM:
*/

class Header extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {favoritecolor: "red"};
    } 
    componentDidMount() {
        setTimeout(() => {
            this.setState({favoritecolor: "yellow"})
        }, 1000)
    }
    componentDidUpdate() {
            document.getElementById("mydiv").innerHTML =
            "The update favorite is " + this.state.favoritecolor;
    }
    render() {
        return (
            <div>
                <h1>My Favorite Color is {this.state.favoritecolor}</h1> 
                <div id="mydiv"></div>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<Header />);

