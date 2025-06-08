/* 
--- shouldComponentUpdate
- In the shouldComponentUpdate() method you can return a Boolean value that specifies whether React should
  continue with the rendering or not. 
- The default value is true
- The example below shows what happens when the shouldComponentUpdate() method returns false:
- Example: Stop the component from rendering at any update: 
*/

class Header extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {favoritecolor: "red"};
    }
    shouldComponentUpdate() {
        return false;
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
