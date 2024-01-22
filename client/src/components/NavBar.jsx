import { Link, NavLink } from "react-router-dom";
import '../App.css'

export default function NavBar() {
    return (
        <nav className="lauti-nav">
            <span><Link to={'/'} className="logo active-link">TO DOS</Link></span>
            <ul>
                <li>
                    <NavLink to={'/'} className={({ isActive }) => isActive ? "active-link" : "inactive-link"}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/history'} className={({ isActive }) => isActive ? "active-link" : "inactive-link"}>
                        History
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
