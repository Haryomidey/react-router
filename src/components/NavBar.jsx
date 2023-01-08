import { NavLink } from "react-router-dom";
import { useAuth } from "./Auth";


const NavBar = () => {

    const auth = useAuth();

    return (
        <div className="navbar">
            <ul>
                <li><NavLink className="a" to = "/">Home</NavLink></li>
                <li><NavLink className="a" to = "/about">About</NavLink></li>
                <li><NavLink className="a" to = "/products">Products</NavLink></li>
                <li><NavLink className="a" to = "/profile">Profile</NavLink></li>
            </ul>
            {
                !auth.user && (
                    <NavLink to='/login'>Login</NavLink>
                )
            }
        </div>
    )
}
export default NavBar;