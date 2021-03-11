import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <div className="navigate">
                    <p className="goTo" id="about"> About Me </p>
                    <p className="goTo" id="wkhistory"> Skills/Experience</p>            
                    <p className="goTo" id="projects"> Projects </p>
                    <p className="goTo" id="contact"> Contact </p>
            </div>
        </div>
    )
}
export default Navbar;

