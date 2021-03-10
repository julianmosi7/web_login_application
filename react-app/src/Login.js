import "./Login.css";
import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import { TextField } from "@material-ui/core";

const Login = () => {
    return (
        <div className="login">
            <h1>Login</h1> 
            <p>Log in to your account</p>
            <TextField id="standard-basic" label="username"></TextField>
            <TextField id="standard-basic" label="password"></TextField>
            <Button variant="contained" color="primary">
                Submit
            </Button>
        </div>
    )
}

export default Login;
