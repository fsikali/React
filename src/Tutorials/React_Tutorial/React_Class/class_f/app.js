/* 
--- Components in Components
- We can refer to components inside other components:
- Example: Use the Car component inside the Garage component: 
*/

class Car extends React.Component {
    render() {
        return <h2>I am a Car!</h2>;
    }
}

class Garage extends React.Component {
    render() {
        return (
            <div>
                <h1>Who lives in my Garage?</h1>
                <Car />
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);
