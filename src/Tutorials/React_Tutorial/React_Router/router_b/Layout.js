/* 
--- Pages / Components
- The Layout component has <Outlet> and <Link> elements. 
- The <Outlet> renders the current route selected
- <Link> is used to set the URL and keep track of browsing history
- Anytime we link to an internal path, we will use <Link> instead of <a href="">
- The "layout route" is a shared component that inserts common content on all pages, such as a navigation menu.
*/ 

import { Outlet, Link } from "react-router-dom"; 

const Layout = () => {
    return (
        <>
          <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/blogs">Blogs</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
          </nav>

          <Outlet />
        </>
    )
}; 

export default Layout;