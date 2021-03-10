import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <div className="navigate">
                    <li className="goTo"> About Me </li>
                    <li className="goTo"> Skills/Experience </li>           
                    <li className="goTo"> Projects </li>
                    <li className="goTo"> Contact </li>
            </div>
        </div>
    )
}
export default Navbar;

