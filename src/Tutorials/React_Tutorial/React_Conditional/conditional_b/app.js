/* 
--- Now, we'll create another component that chooses which component to render based on 
    a condition: 
- Try changing the isGoal attribute to true:
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
    if (isGoal) {
        return <MadeGoal/>;
    }
    return <MissedGoal/>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Goal isGoal={false} />);
