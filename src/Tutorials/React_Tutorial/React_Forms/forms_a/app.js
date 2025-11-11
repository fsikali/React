/* 
--- React Forms
- Just like in HTML, React uses forms to allow users to interact with the web page

--- Adding Forms in React
- You add a form with React like any other element:
- Example: Add a form that allows users to enter their name:

- This will work as normal, the form will submit and the page will refresh
- But this is generally not what we want to happen in React
- We want to prevent this default behavior and let React control the form
*/

import React from 'react'; 
import ReactDOM from 'react-dom/client';

function MyForm() {
    return (
        <form>
            <label>Enter your name:
                <input type="text" />
            </label>
        </form>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);
