/* 
--- The Root Node
- The root node is the HTML element where you want to display the result
- It is like a container for content managed by React
- It does NOT have to be a <div> element and it does NOT have to have the id='root':
- Example: The root node can be called whatever you like:
*/ 

<body>

      <header id="sandy"></header>

</body> 

// Display the result in the <header id="sandy"> element

ReactDOM.render(<p>Hello</p>, document.getElementById('sandy')); 
