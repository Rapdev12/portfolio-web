import { NavLink } from "react-router";
import "./HeaderNav.css";

function HeaderNav() {
    return (
        <header className="header">
            <div className="header-inner">
                <div className="logo">
                    <img src="/imagen-rp.svg" alt="Logo Ronald Palacios" className="logo-icon" />
                    <h3>
                        <span>Ronald</span>
                        <span>Palacios</span>
                    </h3>
                </div>

                <nav className="nav-menu">
                    <ul>
                        <li><NavLink to="/home" className={({ isActive }) => (isActive ? "active" : "")}>Homepage</NavLink></li>
                        <li><NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink></li>
                        <li><NavLink to="/portfolio" className={({ isActive }) => (isActive ? "active" : "")}>Portfolio</NavLink></li>
                        <li><NavLink to="/services" className={({ isActive }) => (isActive ? "active" : "")}>Services</NavLink></li>
                        <li><NavLink to="/resumecv" className={({ isActive }) => (isActive ? "active" : "")}>My Cv</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default HeaderNav;