import React from "react";
import '../styles/footer.css';

function Footer() {
    return (
        <div className="footer-container">
            <ul className="lang-list">
                <li className="lang">English</li>
                <li className="lang">Spanish</li>
                <li className="lang">French</li>
            </ul>
            <div className="border"></div>
            <ul className="footer-options">
                <li className="option">Sign up</li>
                <li className="option">Log In</li>
                <li className="option">Messenger</li>
                <li className="option">Facebook Lite</li>
                <li className="option">Watch</li>
                <li className="option">Places</li>
                <li className="option">Games</li>
                <li className="option">Marketplace</li>
                <li className="option">Meta Play</li>
                <li className="option">Meta Store</li>
                <li className="option">Meta Quest</li>
                <li className="option">Instagram</li>
                <li className="option">Bulletin</li>
            </ul>
            <span className="copyright"> Not Meta © 2023</span>
        </div>
    )
};

export default Footer;