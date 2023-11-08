import React from "react";
import { Link } from 'react-router-dom';
import './../../Styles/Welcome.css'

const Welcome = () => {
    return (
        <div className="welcomePage">
            <div className="center">
                <img src="../../\" alt="Hotspot Locator Logo" />
                <h2>Hotspot Locator</h2>
                <h3>Finding events has never been easier!</h3>
            </div>
            <div className="buttonContainer">
                <Link to="/SignUp" className="button">
                    Register
                </Link>
                <Link to="/SignIn" className="button">
                    LogIn
                </Link>
            </div>
        </div>
    );
}

export default Welcome;
