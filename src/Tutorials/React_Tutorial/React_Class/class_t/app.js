/* 
--- render
- The render() method is of course called when a component gets updated, it has to re-render
  the HTML to the DOM, with the new changes. 
- The example below has a button that changes the
- Example: Click the button to make a change in the component's state: 
*/

class Header extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {favoritecolor: "red"};
    }
    changeColor = () => {
        this.setState({favoritecolor: "blue"});
    }
    render() { 
        return (
            <div>
                <h1>My Favorite Color is {this.state.favoritecolor}</h1>
                <button type="button" onClick={this.changeColor}>Change color</button>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<Header />);
