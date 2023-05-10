import React from "react";
import Footer from './Footer';
import '../styles/signin.css';
import image from '../assets/facebook-logo.svg';

function SignIn() {

    return (
        <>
        <div className="content">
            <div className="signin-container">
                <div className="fb-signin-info">
                    <img className="facebook-logo" src={image} alt='logo'></img>
                    <h2 className="facebook-description">Connect with friends and the world around you on Facebook.</h2>
                </div>
                <div className="signin">
                    <form className="login-container" autoComplete="off">
                        <input type="text" className="signin-input" placeholder="Email or phone number" name="email"></input>
                        <input type="text" className="signin-input" placeholder="Password" name="password"></input>
                        <button className="login-btn" type="submit">Log In</button>
                        <a className="forgot-password" href="facebook.com">Forgot Password?</a>
                    </form>
                    <button className="new-acc-btn">Create new account</button>
                </div>
            </div>
        </div>
        <Footer />
        </>
        
    )
};

export default SignIn