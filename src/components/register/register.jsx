import React, { useRef, useState } from 'react';
import {Link, useHistory} from "react-router-dom";
import {  } from "react-router-dom";
import api from "./../../api/index"
import './register.css'


const Register = () => {

    const username = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const [error, setError] = useState(false);
    let history = useHistory();

    /**TODO, validate form data */
    const isValid = (formData)=>{ return true}
    const handleClick = async (event) => 
    {
        event.preventDefault()
        setError(false)
        const newUser = {
            username : username.current.value,
            email : email.current.value,
            password : password.current.value,
        }
        if ( isValid( newUser) ) 
        {
            try {
                const data = await api.authRegister( newUser )
                if(data) history.push('/login') //maybe we can add a validate email page
            } catch (err) {
                setError(true)
            }
        }
    }
    return (
        <>
            <div className="register">
                <span className="registerTitle">Register</span>
                <form action="post" className="registerForm">
                    <label>Username</label>
                    <input type="text" ref={username} className="registerInput" placeholder="Enter username ..." />
                    <label>Email</label>
                    <input type="text" ref={email} className="registerInput" placeholder="Enter email ..." />
                    <label>Password</label>
                    <input type="password" ref={password} className="registerInput" placeholder="Enter password ..." />
                    <button className="registerButton" onClick={handleClick}>Register</button>
                </form>
                <button className="registerLoginButton"><Link to="/login" className="link">Login</Link></button>
                {error && <span style={{color:"white", marginTop:"15px"}}> Something went wrong :O </span>}
            </div>
        </>
    );
}

export default Register;
