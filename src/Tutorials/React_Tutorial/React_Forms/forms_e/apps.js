/* 
--- Textarea
- The textarea element in React is slightly different from ordinary HTML
- In HTML the value of a textarea was the tect between the start tag <textarea> and the end tag </textarea>
- In React the value of a textarea is placed in a value attribute. We'll use the useState Hook to manage
  the value of the textarea:
- Example: A simple textarea with some content: 
*/ 

import React, { useState } from 'react'; 
import ReactDOM from 'react-dom/client'; 

function MyForm() {
    const [textarea, setTextarea] = useState(
        "The content of a textarea goes in the value attribute"
    );

    const handleChange = (event) => {
        setTextarea(event.target.value)
    } 

    return (
        <form>
            <textarea value={textarea} onChange={handleChange} />
        </form>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);

