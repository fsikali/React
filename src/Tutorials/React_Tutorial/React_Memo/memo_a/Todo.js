/*
- When you click the increment button, the Todos component re-renders
- If this component was comples, it could cause performance issues
*/

const Todos = ({ todos }) => {
    console.log("child render"); 
    return (
        <> 
          <h2>My Todo</h2>
          {todos.map((todo, index) => {
            return <p key={index}>{todo}</p>
          })}
        </>
    );
};
