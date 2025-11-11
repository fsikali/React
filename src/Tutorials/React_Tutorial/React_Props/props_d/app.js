/*
- Example: Create a variable named carName and send it to the Car component: 
*/

function Car(props) {
    return <h2>I am a { props.brand }!</h2>;
}

function Garage() {
    const carName = "Ford"; 
    return (
        <>
          <h1>Who libes in my garage?</h1>
          <Car brand={ carName } />
        </>
    );
} 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);
 
