import React from 'react';
import classes from './SidebarList.module.css'
import SidebarListItem from '../SidebarListItem/SidebarListItem';
import { Board } from '../../../interfaces/boards.interface';
import SidebarListIcon from '../SidebarListIcon/SidebarListIcon';
import { useDispatch} from 'react-redux';
import { actionModalSlice, } from '../../../store/modalSlice';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';

interface SidebarListProps{
    boards: Board[]
}

const SidebarList = (props: SidebarListProps) => {

    const dispatch: Dispatch<AnyAction> = useDispatch();

    function handleCreateNewBoard() {
        dispatch(actionModalSlice.openBoardModal(''))
    }

    return (
        <React.Fragment>
            <div className={classes.sidebarContentTopList}>
                {
                    props.boards.map( (board: Board, index: number) => {
                        return (
                            <SidebarListItem label={board.name} key={index} />
                        )
                    })
                }
                <button className={classes.sidebarCreateNewBoardButton}>
                    <SidebarListIcon color='#635FC7'/>
                    <h5 onClick={handleCreateNewBoard} className={classes.sidebarCreateNewBoardButtonLabel}> + Create New Board </h5>
                </button>
            </div>
        </React.Fragment>
    )
}

export default SidebarList;