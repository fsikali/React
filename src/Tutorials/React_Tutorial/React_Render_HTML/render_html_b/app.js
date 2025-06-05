/* 
--- The HTML Code
- The HTML code in this tutorial uses JSX which allows you to write HTML tag inside the JS code:
- Do not worry if the syntax is unfamiliar, you will learn more about JSX in the next chapter
- Example: Create a variable that contains HTML code and display it in the "root" node. 
*/ 

const myelement = (
    <table>
        <tr>
            <th>Name</th>
        </tr> 
        <tr>
            <td>John</td>
        </tr> 
        <tr>
            <td>Elsa</td>
        </tr>
    </table>
); 

ReactDOM.render(myelement, document.getElementById('root'));

