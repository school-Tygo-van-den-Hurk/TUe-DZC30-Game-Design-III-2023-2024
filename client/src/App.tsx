import { NavLink as ReactRouterNavLink, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import './index.css';
import Maps from './pages/maps/Maps';
import Home from './pages/home/Home';
import Puzzle from './pages/puzzle/Puzzle';
import Lore from './pages/lore/Lore';
import About from './pages/about/About';
import { contactURL, repositoryURL } from './pages/constants';

function NavLink(props: { to: string; children: React.ReactNode; }) {
    const { pathname } = useLocation();
    const isActive = pathname === props.to;
    const className = (isActive) ? ("active-nav-link") : ("");

    return (
        <ReactRouterNavLink {...props} className={className} />
    );
}

function App() {
    
    const launchYear  = (2024);
    const currentYear = (new Date().getFullYear());
    const copyRightYear = (currentYear<=launchYear?`${launchYear}`:`${launchYear}-${currentYear}`);

    return (
        <div className="App">
            <header>
                <div className="nav-bar">
                    <nav className="hide-navbar">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/puzzle">Puzzle</NavLink>
                        <NavLink to="/maps">Map</NavLink>
                        <NavLink to="/lore">Lore</NavLink>
                        <NavLink to="/about">About</NavLink>
                    </nav>
                    <img className="navbar-icon" src="/hamburger-menu-stripes.svg" 
                        alt="a classic hamburger menu icon, three horizontal stripes" />
                    <img className="navbar-icon hidden" src="/hamburger-menu-cross.svg" 
                        alt="a classic close menu icon, a cross"
                    />
                </div>
            </header>
            <main>
                <Routes>
                    <Route path="/"       element={ <Home/>   } />
                    <Route path="/maps"   element={ <Maps/>   } />
                    <Route path="/puzzle" element={ <Puzzle/> } />
                    <Route path="/lore"   element={ <Lore/>   } />
                    <Route path="/about"  element={ <About/>  } />
                </Routes> 
            </main>
            <footer>
                <img src="/icon.responsive.svg" alt="A skull with swords" style={{
                    width:"100%",
                    maxWidth:"5em"
                }} />
                <div id="footer-text">
                    <p id="copyright-notice">
                        Copyright &copy; {copyRightYear} &middot; Group 4 for Game Design III, 
                        a course from TU/e &middot; all rights reserved.
                    </p>
                </div>
                <ul>
                    <li><a href={repositoryURL}>GitHub</a></li>
                    <li><a href={contactURL}>Contact</a></li>
                </ul>
            </footer>
        </div>
    );
}

export default App;
