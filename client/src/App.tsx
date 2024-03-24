import { NavLink as ReactRouterNavLink, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Maps from './pages/maps/Maps';
import Home from './pages/home/Home';
import Puzzle from './pages/puzzle/Puzzle';

function NavLink(props: { to: string; children: React.ReactNode; }) {
    const { pathname } = useLocation();
    const isActive = pathname === props.to;
    const className = (isActive) ? ("active-nav-link") : ("");

    return (
        <ReactRouterNavLink {...props} className={className} />
    );
}

function App() {
    return (
        <div className="App">
            <div className="nav-bar">
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/puzzle">Puzzle</NavLink>
                    <NavLink to="/maps">Map</NavLink>
                </nav>
            </div>
            <main>
                <Routes>
                    <Route path="/" element={ <Home/> } />
                    <Route path="/maps" element={ <Maps/> } />
                    <Route path="/puzzle" element={ <Puzzle/> } />
                </Routes>
            </main>
        </div>
    );
}

export default App;
