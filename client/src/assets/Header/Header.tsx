import { NavLink as ReactRouterNavLink, useLocation } from 'react-router-dom';
import { contactURL, decommissioned } from '../constants';
import "./Header.css";
import NotificationBanner, { NotificationBannerTypes } from '../NotificationBanner/NotificationBanner';

/**
 * used to add the "active" class to the link who's path we are at
 */
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

/**
 * The header to display when the application is decommissioned.
 */
function DecommissionedBanner() {
    return (
        (decommissioned) ? (
            <NotificationBanner type={NotificationBannerTypes.error} dismissible={false}>
                This application is decommissioned. The page is still up,
                however it will no longer be able to connect to the backend. 
                If you have any concerns, or want to know how this affects 
                you, you can <a href={contactURL}>reach out</a>.
            </NotificationBanner>
        ) : (
            <></>
        )
    );
}

/**
 * The default header.
 */
export default function Header() {
    return (
        <header>
            <DecommissionedBanner/>
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
