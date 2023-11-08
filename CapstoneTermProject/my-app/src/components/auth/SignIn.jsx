import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { Link } from 'react-router-dom';
import './../../Styles/Signin.css'


const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (e) => {
        //todo sign in
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential)
        }).catch((error) => {
            console.log(error);
        })
    }
    return (
        <div className="sign-in-container">
            <form onSubmit={signIn}>
                <h1>Log in</h1>
                <input type="email" placeholder='Enter your email' 
                value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <br />
                <br />
                <input type="password" placeholder='Enter your password'
                value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <br />
                <br />
                <Link to="/Home">
                    <button type="submit">Log In</button>
                </Link>
            </form>
        </div>
    );
};


export default SignIn;