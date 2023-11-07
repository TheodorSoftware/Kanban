import React, { useState } from 'react';
import classes from './Navbar.module.css';
import MenuIcon from '../../../public/menu.svg';
import { useDispatch } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';
import { actionModalSlice } from '../../store/modalSlice';
import { Params, useParams } from 'react-router-dom';

interface NavbarProps{
    boardName: string;
}

const Navbar = (props: NavbarProps) => {

    const {id} : Readonly<Params<string>>= useParams();
    const dispatch: Dispatch<AnyAction> = useDispatch();

    function openAddNewTaskModal(): void { 
        dispatch(actionModalSlice.openAddNewTaskModal());
    }

    function editBoardHandler(): void {
        dispatch(actionModalSlice.openBoardModal(id));
    }

    return (
        <React.Fragment>
            <div className={classes.navbar}>
                <h2 className={classes.navbarTitle}> {props.boardName} </h2>
                <div className={classes.control}>
                    <button onClick={openAddNewTaskModal} className={classes.button}> + Add New Task</button>
                    <button onClick={editBoardHandler} className={classes.menuButton}> 
                        <img alt="menuLogo" src={MenuIcon} />
                    </button>
                </div>
            </div>
        </React.Fragment>
    )
};

export default Navbar;