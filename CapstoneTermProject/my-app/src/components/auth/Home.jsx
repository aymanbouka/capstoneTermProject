import React from "react";
import { Link } from 'react-router-dom';
import './../../Styles/Signup.css'



const Home = () => {
    
    return (
        <div className="sign-in-container">
           Hello World
           <Link to="/"><br></br>
           <button>Go back</button>
           </Link>
        </div>
    );
}


export default Home;