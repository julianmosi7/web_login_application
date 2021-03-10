import "./Login.css";
import React, { useState } from 'react'

const Login = () => {
    return (
        <div className="login">
            <h1>Login</h1>
            <label>Username:</label>
            <input type="text"></input>
            <br></br>
            <label>Password:</label>
            <input type="password"></input>
            <br></br>
            <button>Submit</button>
        </div>
    )
}

export default Login;
