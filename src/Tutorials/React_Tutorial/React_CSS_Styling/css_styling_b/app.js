/*
--- camelCased Property Names
- Since the inline CSS is written in a JavaScript object, properties with hyphen separators, like
  background-color, must be writtn with camel case syntax:
- Example: Use backgroundColor instead of background-color 
*/

const Header = () => {
    return (
        <>
          <h1 style={{backgroundColor: "lightblue"}}>Hello Style!</h1>
          <p>Add a little style!</p>
        </>
    );
}
