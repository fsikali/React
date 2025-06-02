/* 
--- Example Explained
- We have created a new file called useFetch.js containing a function called useFetch which 
  contains all of the logic needed to fetch our data.
- We removed the hard-code URL and replaced it wih a url variable that can be passed to the 
  custom Hook. 
- Lastly, we are returning our data from our Hook 
- In index.js, we are importing our useFetch Hook and utilizing it like any other Hook. 
  This is where we pass in the URL to fetch data from. 
- Now we can reuse this custom Hook in any component to fetch data from any URL.
*/





import ReactDOM from "react-dom/client"; 
import useFetch from "./useFetch"; 

const Home = () => {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos"); 

    return (
        <> 
          {data && 
            data.map((item) => {
                return <p key={item.id}>{item.title}</p>
            })}
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<Home />);
