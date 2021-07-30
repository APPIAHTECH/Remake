import React from 'react';
import {Link} from "react-router-dom";

import './register.css'
const Register = () => {
    return (
        <>
            <div className="register">
                <span className="registerTitle">Register</span>
                <form action="post" className="registerForm">
                    <label>Username</label>
                    <input type="text" className="registerInput" placeholder="Enter username ..." />
                    <label>Email</label>
                    <input type="text" className="registerInput" placeholder="Enter email ..." />
                    <label>Password</label>
                    <input type="password" className="registerInput" placeholder="Enter email ..." />
                    <button className="registerButton">Register</button>
                </form>
                <button className="registerLoginButton"><Link to="/login" className="link">Login</Link></button>
            </div>
        </>
    );
}

export default Register;
