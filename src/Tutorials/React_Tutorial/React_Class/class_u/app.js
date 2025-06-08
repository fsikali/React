/* 
--- getSnapshotBeforeUpdate
- In the getSnapshotBeforeUpdate() method you have access to the props and state before the update, meaning
  that even after the update, you can check what the values were before the update.
- If the getSnapShotBeforeUpdate() method is present, you should also include the componentDidupdate() method, 
  otherwise you will get an error.
- When the component is mounting it is rendered with the favorite color "red"
- When the component has been mounted, a timer changes the state, and after one second, the favorite color
  becomes "yellow"
- This action triggers the update phase, and since this component has a getSnapahotBeforeUpdate() method, this
  method is executed, and writes a message to the empty DIV1 element. 
- Then the componentDidUpdate() method, this method is executed and write a message in the empty DIV2 element.
- Example: Use the getSnapShotBeforeUpdate() method to find out what the state object looked like before the update:
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
    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("div1").innerHTML =
        "Before the update, the favorite was " + prevState.favoritecolor;
    } 
    componentDidUpdate() {
        document.getElementById("div2").innerHTML = 
        "The updated favorite is " + this.state.favoritecolor; 
    }
    render() {
        return (
            <div>
                <h1>My Favorite Color is {this.state.favoritecolor}</h1> 
                <div id="div1"></div>
                <div id="div2"></div>
            </div>
        ); 
    }
}

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<Header />);
