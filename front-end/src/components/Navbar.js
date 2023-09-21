import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="container">
                {/* Brand or name, could be a logo or text */}
                <Link to="/" className="navbar-brand">Rayman Jamal</Link>
                
                {/* Navigation links */}
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/portfolio" className="nav-link">Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/resume" className="nav-link">Resume</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
