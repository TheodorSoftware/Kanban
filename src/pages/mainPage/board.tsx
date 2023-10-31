import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";

import classes from './board.module.css';
import Navbar from "../../components/Navbar/Navbar";
import { useParams} from "react-router-dom";
import TaskBoard from "../../components/taskBoard/taskBoard";

const Board = (props:any) => {
    const {id } = useParams()

    return (
        <React.Fragment>
            <div className={classes.board}>
                <Sidebar></Sidebar>
                <div className={classes.boardContent}>
                    <Navbar boardName={id}> </Navbar>
                    <TaskBoard boardName={id}></TaskBoard>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Board;