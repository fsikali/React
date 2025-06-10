/* 
--- Pass Data
- Props are also how you pass data from one component to another, as parameters.
- Example: Send the "brand" property from the Garage component to the Car component:
- If you have a variable to send, and not a string as, you just put the variable name inside
  curly brackets:
*/ 

function Car(props) {
    return <h2>I am a { props.brand }!</h2>;
} 

function Garage() {
    return (
        <> 
          <h1>Who lives in my garage?</h1> 
          <Car brand="Ford" />
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);
