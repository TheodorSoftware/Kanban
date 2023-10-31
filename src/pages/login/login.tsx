import React from "react";
import classes from './login.module.css'
import logo from '../../../public/logo.svg';
import { NavLink } from "react-router-dom";

const Login = (props: any) => {
    return (
        <React.Fragment>
            <div className={classes.loginContainer}>
                <div className={classes.loginContent}>
                    <div className={classes.title}>
                        <img alt="logo" src={logo} />
                    </div>
                    <h1 className={classes.loginTitle}> Login </h1>
                    <form className={classes.form}>
                        <div className={classes.group}>
                            <input type="text" required/>
                            <span className={classes.highligth}></span>
                            <span className={classes.bar}></span>
                            <label> Email </label>
                        </div>

                        <div className={classes.group}>      
                            <input type="password" required />
                            <span className={classes.highligth}></span>
                            <span className={classes.bar}></span>
                            <label>Password</label>
                        </div>

                        <button className={classes.logInButton}>
                            Log In
                        </button>
                    </form>
                    <p className={classes.registerText}> 
                        Dont have an account? 
                        <NavLink to={'/register'}> Register Here </NavLink>
                    </p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Login;