import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importing components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import './App.css';

function App() {
    return (
        <Router>
            <div className="wrapper">
                <Navbar />
                <Routes>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/resume" component={Resume} />
                    <Route path="/contact" component={Contact} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
