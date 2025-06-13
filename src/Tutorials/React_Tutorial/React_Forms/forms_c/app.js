/* 
--- Submitting Forms
- You can control the submit action by adding an event handler in the onSubmit attribute for the <form>:
- Example: Add a submit button and an event handler in the onSubmit attribute: 
*/

import { useState } from 'react'; 
import ReactDOM from 'react-dom/client'; 

function MyForm() {
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
         alert(`The name you entered was: ${name}`)
    } 

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
                <input 
                 type="text"
                 value={name}
                 onChange={(e) => setName(e.target.value)}
                />
            </label>
        </form>
    )
} 

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<MyForm />);
