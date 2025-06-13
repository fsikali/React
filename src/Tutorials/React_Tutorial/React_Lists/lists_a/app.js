/* 
--- React Lists
- In React, you will render lists with some type of loop
- The JS map() array method is generally the preferred method.
- N/B: If you need a refresher on a map() method

- Example: Let's render all of the cars from our garage:
- When you run this code in your create-react-app, it will work but you will receive a warning that there
  is no "key" provided for the list items.
*/

function Car(props) {
    return <li>I am a { props.brand }</li>;
}

function Garage() {
    const cars = ['Ford', 'BMW', 'Audi'];
    return (
        <>
          <h1>Who lives in my garage?</h1>
          <ul>
            {cars.map((car) => <Car brand={car} />)}
          </ul>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);
