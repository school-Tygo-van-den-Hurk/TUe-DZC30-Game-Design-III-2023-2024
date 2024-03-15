import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Maps from './pages/maps/Maps';
import Home from './pages/home/Home';
import Puzzle from './pages/puzzle/Puzzle';

function App() {
    return (
        <div className="App">
            <Link to="/maps">to the maps page</Link><br/>
            <Link to="/puzzle">to the puzzle</Link><br/>
            <Link to="/">home page</Link><br/>
            <Routes>
                <Route path="/maps" element={ <Maps/> } />
                <Route path="/" element={ <Home/> } />
                <Route path="/puzzle" element={ <Puzzle/> } />
            </Routes>
        </div>
    );
}

export default App;
