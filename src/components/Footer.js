import React from 'react';
import './Footer.css';
import copyright from './media/images/copyright26px.png';

function Footer () {
    return (
        <div className="footer">
            <img className="copyright" alt="copyright" src={copyright} />
            <p className="footer__copyrightText"> Copyright Vanessa Jackson 2021 </p>
        </div>
    )
}
export default Footer;