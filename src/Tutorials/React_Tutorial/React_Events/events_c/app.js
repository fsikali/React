/* 
--- React Event Object
- Event handlers have access to the React event that triggered the function
- Example: Arrow Function: Sending the event object manually: 
*/

function Football() {
    const shoot = (a, b) => {
        alert(b.type);
        /* 
        'b' represents the React event that triggered the function, in this
        case the 'click' event
        */
    }

    return (
        <button onClick={(event) => shoot("Goal", event)}>Take the shot!</button>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Football />);

