/*
--- Rendering a Component
- Now your React application has a component called Car, which returns an <h2> element.
- To use this component in your application, use similar syntax as normal HTML: <Car />
- Example: Display the Car component in the "root" element.
*/

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<Car />);
