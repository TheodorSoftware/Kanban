import React, { useEffect, useState } from 'react';

import classes from './Sidebar.module.css';
import logo from '../../../public/logo.svg';
import hideEyeLogo from '../../../public/hideEyeLogo.svg';
import showEyeLogo from '../../../public/showEyeLogo.svg';
import SidebarList from './SidebarList/SidebarList';
import ToggleButton from './ToggleButton/ToggleButton';
import { Board } from '../../interfaces/boards.interface';
import { useDispatch, useSelector } from 'react-redux';
import { boardSliceActions, fetchBoardData, selectBoardData, selectBoardStatus } from '../../store/boardsSlice';
import { Status } from '../../interfaces/status.enum';
import { AnyAction } from 'redux';

const Sidebar = () => {

    const dispatch = useDispatch();
    const [boards,setBoards] = useState<Board[]>([]);
    const [isOpen,setIsOpen] = useState<Boolean>(false);

    const boardData: Board[] = useSelector(selectBoardData)
    const boardStatus: string = useSelector(selectBoardStatus);

    useEffect( ()=> {
        if(boardStatus === Status.PENDING){
            dispatch(fetchBoardData());
        }
    },[boardStatus, dispatch])

    function hideSidebarHandler(){
        isOpen === true ? setIsOpen(false) : setIsOpen(true);
    }

    return (
        <React.Fragment>
            <div className={`${classes.sidebar} ${isOpen === true ? `${classes.active}` : ''}`}>
                <div className={classes.title}>
                    <img alt="logo" src={logo} />
                </div>
                <div className={classes.sidebarContent }>
                    <div className={classes.sidebarContentTop}>
                        <h4 className={classes.sidebarContentTopTitle}> ALL BOARDS (3) </h4>
                        <SidebarList boards={boardData}></SidebarList>
                    </div>
                    <div className={classes.sidebarContentBottom}>
                        <ToggleButton> </ToggleButton>
                        <div className={classes.sidebarContentBottomHide}>
                            <button onClick={hideSidebarHandler} className={classes.sidebarContentBottomHideButton}>
                                <img alt="hideEyeLogo" src={hideEyeLogo} /> 
                                <p className={classes.sidebarContentBottomHideLabel}> Hide Sidebar </p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${isOpen === false ? `${classes.hideShowButton}` : `${classes.activeShowButton}`} `}>
                <button onClick={hideSidebarHandler} className={classes.floatingShowButton}>
                    <img alt="showEyeLogo" src={showEyeLogo} />
                </button>
            </div>
        </React.Fragment>
    )
}

export default Sidebar;