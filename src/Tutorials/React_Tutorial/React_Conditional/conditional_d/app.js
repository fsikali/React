/* 
--- Ternary Operator
- Another way to conditionally render elements is by using a ternary operator.
- condition ? true : false

--- Example: Return the MadeGoal component if isGoal is true, otherwise return the MissedGoal component:
*/

function Goal(props) {
    const isGoal = props.isGoal;
    return (
        <>
          { isGoal ? <MadeGoal/> : <MissedGoal/> }
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Goal isGoal={false} />);
