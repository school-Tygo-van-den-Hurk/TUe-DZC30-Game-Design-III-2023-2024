import { NavLink as ReactRouterNavLink, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import './index.css';
import Maps from './pages/maps/Maps';
import Home from './pages/home/Home';
import Puzzle from './pages/puzzle/Puzzle';
import Lore from './pages/lore/Lore';
import About from './pages/about/About';
import { contactURL, repositoryURL } from './assets/constants';
import NotFound from './assets/NotFound/NotFound';

function NavLink(props: { to: string; children: React.ReactNode; }) {
    const { pathname } = useLocation();
    const isActive = pathname === props.to;
    const className = (isActive) ? ("active-nav-link") : ("");

    return (
        <ReactRouterNavLink {...props} className={className} />
    );
}

const decommissioned = false; // TODO : set to true when the course is over.

function App() {
    
    const launchYear  = (2024);
    const currentYear = (new Date().getFullYear());
    const copyRightYear = (currentYear<=launchYear?`${launchYear}`:`${launchYear}-${currentYear}`);

    return (
        <div className="App">
            <header>
                {warn()}
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
                    <Route path="/"       element={ <Home/>      } />
                    <Route path="/maps"   element={ <Maps/>      } />
                    <Route path="/puzzle" element={ <Puzzle/>    } />
                    <Route path="/lore"   element={ <Lore/>      } />
                    <Route path="/about"  element={ <About/>     } />
                    <Route path="*"       element={ <NotFound/>  }/>
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

function warn() {
    const noContent = (<></>); // explanation for a constant

    if (decommissioned) return (
        <div className="notification">
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

export default App;
