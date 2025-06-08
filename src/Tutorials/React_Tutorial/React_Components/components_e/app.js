/* 
--- Components in Components
- We can refer to components inside other components:
- Example: Use the Car components inside the Garage component: 
*/

function Car() {
    return <h2>I am a Car!</h2>;
}

function Garage() {
    return (
        <>
           <h1>Who lives in my Garage?</h1>
           <Car />
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);

