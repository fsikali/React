/* 
--- React Router
- Create React App doesn't include page routing
- React Router is the most popular solution

--- Add React Router
- To add React Router in your application, run this in the terminal from the root directory of the application:
   --- npm i -D react-router-dom

- N/B: This tutorial uses React Router v6
- If you are upgrading from v5, you will need to use the @latest flag: --- npm i -D react-router-dom@latest

--- Folder Structure 
- To create an application with multiple page routers, let's first start with the file structure
- Within the src folder, we'll create a folder named pages with several files: src\pages\:
  - Layout.js 
  - Home.js
  - Blogs.js
  - Contact.js
  - NoPage.js
- Each file will contain a very basic React component.

--- Basic Usage
- Now we will use our Router in our index.js file
- Example: Use React Router to route to pages based on URL:
- index.js: 

--- Explanation
- We wrap our content first with <BrowserRouter>
- Then we define our <Routes>. An application can have multiple <Router>. Our basic example uses one.
- <Route>s can be nested. The first <Route> has a path of / and renders the Layout component
- The nested <Route>s inherit and add to the parent route. So the blogs path is combined with the parent and
  becomes /blogs
- The Home component route does not have a path but has an index attribute. That specifies this route as the 
  default route for the parent route, which is /. 
- Setting the path to * will act as a catch-all for any undefined URLs.This is great for a 404 error page.
*/

import ReactDOM from "react-dom/client"; 
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Layout from "./pages/Home"; 
import Home from "./pages/Home"; 
import Blogs from "./pages/Blogs"; 
import Contact from "./pages/Contact"; 
import NoPage from "./pages/NoPage";

export default function App() {
    return (
        <BrowserRouter>
             <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="blogs" element={<Blogs />} />
                <Route path="contact" element={<Contact />} /> 
                <Route path="*" element={<NoPage />} />
             </Route>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

