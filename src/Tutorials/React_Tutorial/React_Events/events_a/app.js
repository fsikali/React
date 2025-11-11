/* 
--- React Events
- Just like HTML DOM events, React can perform actions based on user events
- React has the same events as HTML:

--- Adding Events
- Reacts events are written in camelCase syntax:
- onClick instead of onclick 
- React event handlers are written inside curly braces:
- onClick={shoot} instead of onClick="shoot()".  

- Example: Put the shoot function inside the Football component:
*/

function Football() {
    const shoot = () => {
        alert("Great Shot!");
    }
 
    
    return (
        <button onClick={shoot}>Take the shot!</button>
    );
}
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Football />)

