/* 
--- React Render HTML 
- React's goal is in many ways to render HTML in a web page
- React renders HTML to the web page by using a function called React.DOM render() 

--- The Render Function 
- The ReactDOM.render() function takes two arguments, HTML code and an HTML element
- The purpose of the function is to displaay the specified HTML code inside the specified HTML element
- There another folder in the root directory of your React project, named "public". In this folder, there is
  an index.html file
- N/B: There is a single <div> in the body of this file. This is where our React application will be rendered 

- Example: Display a paragraph inside an element with the id of "root":
- N/B: The element id does not have to be called "root", but this is the standard convention. 
*/

ReactDOM.render(<p>Hello</p>, document.getElementById('root'));

// The result is displayed in the <div id="root"> element

<body>
    <div id="root"></div>
</body>
