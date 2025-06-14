/* 
--- Styling React Using CSS 
- There are many wats to style React with CSS:
  - inline styling
  - CSS stylesheets
  - CSS Modules

- Inline Styling
- To style an element with the inline style attribute, the value must be a JavaScript object:
- Example: Insert an object with the styling information:
- N/B: In JSX, JavaScriipt expressions are writtn inside curly braces, and since JS objects also use curly braces,
       the styling in the example above is written inside two sets of curly braces {{}}.
*/ 

const Header = () => {
    return (
        <>
          <h1 style={{color: "red"}}>Hello Style!</h1>
          <p>Add a little style!</p>
        </>
    );
}