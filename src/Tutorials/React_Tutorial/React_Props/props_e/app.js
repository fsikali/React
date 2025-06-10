/* 
- An object
- Example: Create an object named carInfo and send it to the Car component: 
- N/B: React Props are read-only! You will get an error if you try to change their value.
*/

function Car(props) {
    return <h2>I am a { props.brand.model }!</h2>;
} 

function Garage() {
    const carInfo = { name: "Ford", model: "Mustang" }; 
    return (
        <> 
          <h1>Who lives in my garage?</h1> 
          <Car brand={ carInfo } />
        </>
    );
} 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);
