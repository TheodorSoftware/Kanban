import React from "react";
import classes from './register.module.css';
import logo from '../../../../public/logo.svg';
import { NavLink } from "react-router-dom";

const Register = () => {
    return (
        <React.Fragment>
            <div className={classes.registerContainer}>
                <div className={classes.registerContent}>
                    <div className={classes.title}>
                        <img alt="logo" src={logo} />
                        <h1 className={classes.registerTitle}> Register </h1>
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

                            <div className={classes.group}>      
                                <input type="password" required />
                                <span className={classes.highligth}></span>
                                <span className={classes.bar}></span>
                                <label>Confirm Password</label>
                            </div>

                            <button className={classes.registerButton}>
                                Register
                            </button>
                        </form>
                        <p className={classes.registerText}> 
                            Already have an account ? 
                        <NavLink to={'/'}> Go To Login Page </NavLink>
                    </p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Register;