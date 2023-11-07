import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";

import classes from './board.module.css';
import Navbar from "../../components/Navbar/Navbar";
import { useParams} from "react-router-dom";
import TaskBoard from "../../components/taskBoard/taskBoard";
import { useSelector } from "react-redux";
import { selectOpenAddNewColumnModalFlag, selectOpenAddNewTaskModalFlag, selectOpenBoardModalFlag } from "../../store/modalSlice";
import AbstractModal from "../../components/Modals/AbstractModal";
import AddNewTaskModal from "../../components/Modals/AddNewTaskModal/addNewTaskModal";
import AddNewBoardModal from "../../components/Modals/AddNewBoard/AddNewBoardModal";
import EditBoardModal from "../../components/Modals/EditBoardModal/EditBoardModal";

const Board = (props:any) => {
    const {id} = useParams()
    const [openAbstractModal, setOpenAbstractModal] = useState(false);
    
    const openAddNewTaskModalFlag: boolean = useSelector(selectOpenAddNewTaskModalFlag);
    const openAddNewBoardModalFlag: boolean = useSelector(selectOpenBoardModalFlag);
    const openAddColumnModalFlag: boolean = useSelector(selectOpenAddNewColumnModalFlag);

    useEffect( () => {
        openAddNewTaskModalFlag ? setOpenAbstractModal(true) : setOpenAbstractModal(false);
    }, [openAddNewTaskModalFlag]);

    useEffect( () => {
        openAddNewBoardModalFlag ? setOpenAbstractModal(true) : setOpenAbstractModal(false);
    }, [openAddNewBoardModalFlag]);

    useEffect( () => {
        openAddColumnModalFlag ? setOpenAbstractModal(true) : setOpenAbstractModal(false);
    }, [openAddColumnModalFlag]);

    return (
        <React.Fragment>
            <div className={classes.board}>
                <Sidebar></Sidebar>
                <div className={classes.boardContent}>
                    <Navbar boardName={id}> </Navbar>
                    <TaskBoard boardName={id}></TaskBoard>
                </div>
            </div>
            <AbstractModal isOpen={openAbstractModal}>
                {
                    openAddNewTaskModalFlag ? <AddNewTaskModal></AddNewTaskModal> : null
                }
                {
                    openAddNewBoardModalFlag ? <AddNewBoardModal></AddNewBoardModal> : null
                }
                {
                    openAddColumnModalFlag ? <EditBoardModal></EditBoardModal> : null
                }
            </AbstractModal>

        </React.Fragment>
    )
}

export default Board;