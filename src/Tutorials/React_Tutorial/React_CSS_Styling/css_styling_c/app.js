/* 
--- JavaScript Object
- You can also create an object with styling information, and refer to it in the style attribute:
- Example: Create a style object named myStyle: 
*/ 

const Header = () => {
    const myStyle = {
        color: "white", 
        backgroundColor: "DodgerBlue", 
        padding: "10px", 
        fontFamily: "Sans-Serif"
    }; 

    return (
        <> 
          <h1 style={myStyle}>Hello Style!</h1>
          <p>Add a little style!</p>
        </>
    );
}
