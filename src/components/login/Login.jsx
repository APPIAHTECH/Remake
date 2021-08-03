import React, { useRef, useState, useContext } from 'react';
import {Link, useHistory} from "react-router-dom";
import { Context } from "../../context/Context"
import api from "../../api/index"

import './login.css'


const Login = () => {
    
    const username = useRef(null);
    const password = useRef(null);
    const [error, setError] = useState(false);
    const { user, dispatch, isFetching} = useContext(Context)
    let history = useHistory();

    const handleClick = async (event) => 
    {
        event.preventDefault()
        setError(false)
        dispatch( {type: "LOGIN_START"})
        
        try {
            const res = await api.authLogin( username.current.value,  password.current.value)
            if( res.login ){
                dispatch( {type: "LOGIN_SUCCESS", payload: res.user})
                history.push('/')
            }
            setError(true)
            dispatch( {type: "LOGIN_FAIL"})

        } catch (err) {
            setError(true)
            dispatch( {type: "LOGIN_FAIL"})
        }
    }

    console.log(user);
    return (
        <>
        <div className="login">
            <span className="loginTitle">Login</span>
            <form action="post" className="loginForm">
                <label>Username</label>
                <input type="text" ref={username} className="loginInput" placeholder="Enter username ..." />
                <label>Password</label>
                <input ref={password} type="password" className="loginInput" placeholder="Enter password ..." />
                <button className="loginButton" onClick={handleClick}>Login</button>
            </form>
            <button className="loginRegisterButton" disabled={isFetching}> <Link to="/register" className="link">Register</Link> </button>
            {error && <span style={{color:"white", marginTop:"15px"}}> Invalid User Credentials </span>}
        </div>
        </>
    );
}

export default Login;
