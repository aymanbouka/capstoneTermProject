import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import './../../Styles/Signup.css';
import { Link } from 'react-router-dom';


const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    const signUp = (e) => {
        //todo sign in
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential)
        }).catch((error) => {
            console.log(error);
        })
    }
    return (
        <div className="sign-up-container">
            <form onSubmit={signUp}>
                <h1>Create Account</h1>
                <input type="email" placeholder='Enter your email' 
                value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                 <br />
                 <br />
                <input type="password" placeholder='Enter your password'
                value={password} onChange={(e) => setPassword(e.target.value)}></input>
                 <br />
                 <br />
                <Link to="/Home">
                    <button type="submit">Sign Up</button>
                </Link>
                 <br />
                 <br />
                <Link to="/SignIn"> Have an account click Here</Link>
            </form>
        </div>
    );
};


export default SignUp;