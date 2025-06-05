/* 
--- One Top Level Element
- The HTML code must be wrapped in ONE to level element
- So if you like to write two paragraphs, you must put them inside a parent element, like a div element
- Example: Wrap two paragraphs inside one DIV element:

- N/B: JSX will throw an error if the HTML is not correct, or if the HTML misses a parent element
*/ 

const myElement = (
    <div>
        <p>I am a paragraph</p> 
        <p>I am a paragraph too</p>
    </div>
)