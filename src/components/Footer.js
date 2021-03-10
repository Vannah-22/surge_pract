import React from 'react';
import './Footer.css';
// import copyright from './media/images/copyright26px.png';

function Footer () {
    return (
        <div className="footer">
            {/* <img className="footer__cprt" alt="copyright" src={copyright}> </img> */}
            <p className="footer__copyrightText"> Copyright Vanessa 2021 </p>
        </div>
    )
}
export default Footer;