import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Maps from './pages/maps/Maps';
import Home from './pages/home/Home';
import Puzzle from './pages/puzzle/Puzzle';

function App() {
    return (
        <div className="App">
            <nav>
                <Link to="/maps">to the maps page</Link>
                <Link to="/puzzle">to the puzzle</Link>
                <Link to="/">home page</Link>
            </nav>
            <main>
                <Routes>
                    <Route path="/maps" element={ <Maps/> } />
                    <Route path="/" element={ <Home/> } />
                    <Route path="/puzzle" element={ <Puzzle/> } />
                </Routes>
            </main>
        </div>
    );
}

export default App;
