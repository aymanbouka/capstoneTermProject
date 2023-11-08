import React from "react";
import { Link } from 'react-router-dom';
import './../../Styles/Tutorial.css'



const tutorial = () => {
    
    return (
        <div className="tutorial-page">
           Hello World
           <Link to="/"><br></br>
           <button>Go back</button>
           </Link>
        </div>
    );
}


export default tutorial;