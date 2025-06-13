/* 
--- Logical && Operator
- Another way to conditionally render a React component is by using the && operator.
- Example: We can embed JS expression in JSX by using curly braces: 
- If cars.length is equates to true, the expression after && will render.
- Try emptying the cars array:
*/

function Garage(props) {
    const cars = props.cars;
    return (
        <>
          <h1>Garage</h1>
          {cars.length > 0 && 
             <h2>
                You have {cars.length} is your garage.
             </h2>
          }
        </>
    );
}

const cars = ['Ford', 'BMW', 'Audi']; 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage cars={cars} />);
