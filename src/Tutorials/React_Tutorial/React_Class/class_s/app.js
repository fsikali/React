/* 
- Example: shouldComponentUpdate() method returning true;
*/

class Header extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {favoritecolor: "red"};
    }
    shouldComponentUpdate() {
        return true;
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
