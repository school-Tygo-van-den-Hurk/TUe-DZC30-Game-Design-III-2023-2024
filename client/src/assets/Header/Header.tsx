import { NavLink as ReactRouterNavLink, useLocation } from 'react-router-dom';
import { decommissioned } from '../constants';
import "./Header.css";

function NavLink(props: { to: string; children: React.ReactNode; }) {
    const { pathname } = useLocation();
    const isActive  = (pathname === props.to);
    const className = (isActive) ? ("active-nav-link") : ("");

    return (
        <li className="navbar-link">
            <ReactRouterNavLink {...props} className={className} />
        </li>
    );
}

function Header() {
    return (
        <header>
            {warn()}
            <div className="navbar-container">
                <nav id="navbar">
                    <ul id="navbar-links">
                        <NavLink to="/home"   > Home   </NavLink>
                        <NavLink to="/puzzle" > Puzzle </NavLink>
                        <NavLink to="/maps"   > Map    </NavLink>
                        <NavLink to="/lore"   > Lore   </NavLink>
                        <NavLink to="/about"  > About  </NavLink>
                    </ul>
                    <div className={"open-hamburger-img-container"}>
                        <img id="open-hamburger"
                            className="navbar-icon" 
                            src="/hamburger-menu-stripes.svg" 
                            alt="a classic hamburger menu icon, three horizontal stripes" 
                        />
                    </div>
                </nav>
                <div className={"close-hamburger-img-container"}>
                    <img id="close-hamburger"
                        className="navbar-icon" 
                        src="/hamburger-menu-cross.svg" 
                        alt="a classic close menu icon, a cross"
                    />
                </div>
            </div>
        </header>
    );
}

function warn() {
    const noContent = (<></>); // explanation for a constant

    if (decommissioned) return (
        <div id="notification">
            <p style={{
                border:"solid red 1px", color:"red", width:"100%", backgroundColor:"coral", padding:"1em", marginBottom:"1em"
            }}>
                <b style={{color:"inherit"}}>Warning</b>:<i style={{color:"inherit"}}> this game is decommissioned. 
                as the course it was made for ended. The website is still up, however, the game can no longer be 
                played without the treasure.</i>
            </p>
        </div>
    );

    else return (noContent);
}

export default Header;
