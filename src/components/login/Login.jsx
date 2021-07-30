import React from 'react';
import {Link} from "react-router-dom";
import './login.css'
const Login = () => {
    return (
        <>
        <div className="login">
            <span className="loginTitle">Login</span>
            <form action="post" className="loginForm">
                <label>Email</label>
                <input type="text" className="loginInput" placeholder="Enter email ..." />
                <label>Password</label>
                <input type="password" className="loginInput" placeholder="Enter email ..." />
                <button className="loginButton">Login</button>
            </form>
            <button className="loginRegisterButton"> <Link to="/register" className="link">Register</Link> </button>
        </div>
        </>
    );
}

export default Login;
