/* 
--- Attributes class = className
- The class attribute is a much used attribute in HTML, but since JSX is rendered as JS, and the 
  class keyword is reserved word in JS, you are not allowed to use it in JSX.

- N/B: Use attribute classNam instead
- JSX solved this by using className instead. When JSX is rendered, it translates className attributes
  into class attributes.
- Example: Use attribute className instead of class in JSX:
*/

const myElement = <h1 className="myclass">Hello World</h1>

