/* 
--- React Custom Hooks
- Hooks are reusable functions
- When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.
- Custom Hooks start with "use". Example: useFetch

--- Build a Hook 
- In the following code, we are fetching data in our Home component and displaying it
- We will use the JSONPlaceholder service to fetch fake data. This service is greater for testing applications
  when there is no existing data. 
- Use the JSONPlaceholder service to fetch fake "todo" items and display the titles on the page.
- Example: index.js 

- The fetch logic may be needed in other components as well, so well extract that into custom Hook 
- MOve the fetch logic to a new file to be used as a custom Hook.
*/

import { useState, useEffect } from "react"; 
import ReactDOM from "react-dom/client"; 

const Home = () => { 
    const [data, setData] = useState(null); 

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json()) 
        .then((data) => setData(data));
    }, []);

    return (
        <> 
          {data && 
            data.map((item) => {
                return <p key={item.d}>{item.title}</p>
            })}
        </>
    );
}; 

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<Home />);
