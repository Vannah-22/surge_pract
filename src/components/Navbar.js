import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <div className="navigate">
                    <li className="goTo" id="about"> About Me </li>
                    <li className="goTo" id="wkhistory"> Skills/Experience </li>           
                    <li className="goTo" id="projects"> Projects </li>
                    <li className="goTo" id="contact"> Contact </li>
            </div>
        </div>
    )
}
export default Navbar;

