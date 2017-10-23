import React from "react";
import ReactDOM from 'react-dom';
import headerLogo from "../../images/logo.jpg";

export const Footer = (props) => {
    return (
        <footer className="site-footer">
            <div className="site-inner">
                <div className="site-footer-inner">
                    <div className="footer-logo">
                        <img src={ headerLogo } alt="BOSE" />
                    </div>
                    <div className="site-copy">
                        <p>&copy; Bose Corporation 2017</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};