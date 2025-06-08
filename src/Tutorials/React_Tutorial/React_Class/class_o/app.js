/*
--- componentDidMount
- The componentDidMount() method is called after the component is rendered
- This is where you run statements that requires that the component is already placed in the DOM. 
- Example: At first my favorite color is red, but give me a second, and it is yellow instead:
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
    render() {
        return (
            <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />);

