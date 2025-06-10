/* 
--- Passing Arguments
- To pass an argument to an event handler, use an arrow function.
- Example: Send "Goal" as a parameter to the shoot function, using arrow function: 
*/ 

function Football() {
    const shoot = (a) => {
        alert(a);
    } 
    
    return (
        <button onClick={() => shoot("Goal")}>Take the shot!</button>
    );
} 

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<Football />);
