/* 
--- Ternary Operator
- Another way to conditionally render elements is by using a ternary operator.
- condition ? true : false

--- Example: Return the MadeGoal component if isGoal is true, otherwise return the MissedGoal component:
*/

import React from 'react'; 
import ReactDOM from 'react-dom/client'; 

function MissedGoal() {
  return <h1>MISSED!</h1>;
} 

function MadeGoal() {
  return <h1>GOAL!</h1>; 
}

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
