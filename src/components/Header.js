import React from "react";
import '../styles/header.css'
import fbLogo from '../assets/pngwing.com.png'
import profileLogo from '../assets/default-profile-pic.png'

function Header({user}) {

    return(
        <div className="header-container">
            <div className="logo-search-container">
                <img className="fb-logo" src={fbLogo} alt="logo"></img>
                <input type="text" className="fb-search" name="fb-search" placeholder="Search Facebook"></input>
            </div>
            <div className="profile-container">
                <p className="profile-name">{user.impl.user.displayName}</p>
                <img className="profile-logo" src={profileLogo} alt="profile"></img>
            </div>
        </div>
    )
};

export default Header;