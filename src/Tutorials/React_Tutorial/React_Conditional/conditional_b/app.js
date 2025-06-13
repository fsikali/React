/* 
--- Now, we'll create another component that chooses which component to render based on 
    a condition: 
- Try changing the isGoal attribute to true:
*/

function Goal(props) {
    const isGoal = props.isGoal;
    if (isGoal) {
        return <MadeGoal/>;
    }
    return <MissedGoal/>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Goal isGoal={false} />);
