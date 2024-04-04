import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import NotFound from './assets/NotFound/NotFound';
import Header from './assets/Header/Header';
import Footer from './assets/Footer/Footer';
import Puzzle from './pages/puzzle/Puzzle';
import ReactDOM from 'react-dom/client';
import About from './pages/about/About';
import Maps from './pages/maps/Maps';
import Home from './pages/home/Home';
import Lore from './pages/lore/Lore';
import React from 'react';
import './main.css';

/** redirects to `/home` page when rendered. */
function RedirectToHome() { return ( <Navigate to="/home" replace /> )}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Header/>
            <main>
                <Routes>
                    <Route path="/"       element={ <RedirectToHome/> }/>
                    <Route path="/home"   element={ <Home/>           }/>
                    <Route path="/maps"   element={ <Maps/>           }/>
                    <Route path="/puzzle" element={ <Puzzle/>         }/>
                    <Route path="/lore"   element={ <Lore/>           }/>
                    <Route path="/about"  element={ <About/>          }/>
                    <Route path="*"       element={ <NotFound/>       }/>
                </Routes> 
            </main>
            <Footer/>
        </BrowserRouter>
    </React.StrictMode>
);
