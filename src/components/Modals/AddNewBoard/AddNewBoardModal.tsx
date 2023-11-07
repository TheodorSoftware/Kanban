import React, { useEffect, useState } from "react";
import classes from './AddNewBoardModal.module.css';
import { useDispatch, useSelector } from "react-redux";
import { actionModalSlice, selectBoardId, selectOpenBoardModalFlag } from "../../../store/modalSlice";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { selectTasksData, selectTasksStatus } from "../../../store/tasksSlice";
import Task from "../../../interfaces/task.interface";
import { isEmpty } from "ramda";
import InputGroup from "../../InputGroup/InputGroup";

const AddNewBoardModal = (props:any) => {

    const dispatch: Dispatch<AnyAction> = useDispatch();
    const [columns, setColumns] = useState<string[]>([]);
    const boardId: string = useSelector(selectBoardId);
    const tasksData: {id: string, task: Task[]} = useSelector(selectTasksData);

    function handleClose(){
        dispatch(actionModalSlice.closeBoardModal())
    }

    useEffect( () => {
        if(boardId){
            if(tasksData){
                let taskStatusArray: string[] = []
                tasksData.task?.map( (task: Task) => {
                    if(isEmpty(taskStatusArray)){
                        taskStatusArray.push(task.status);
                    } else if(taskStatusArray){
                        if(!taskStatusArray.includes(task.status)){
                            taskStatusArray.push(task.status);
                        }
                    }
                });
                setColumns(taskStatusArray);
            };
        } else if(isEmpty(boardId)) {
            setColumns([]);
        }
    },[])

    function addNewColumnHandler(){
        if(isEmpty(columns)){
            setColumns(['']);
        }else {
            
            setColumns([...columns,'']);
        }
    }

    function addNewBoardHandler(){
        console.log('New Board')
    }

    return (
        <React.Fragment>
            <div className={classes.addNewBoard}>
                <div className={classes.titleGroup}>
                    {
                        boardId !== '' ? 
                            <h3 className={classes.modalTitle}> Edit Board </h3> 
                            :
                            <h3 className={classes.modalTitle}> Add New Board </h3>
                    }
                    <button onClick={handleClose} className={classes.closeButton}>
                        Close
                    </button>
                </div>
                <div className={classes.titleInput}>
                    <h6 className={classes.inputLabel}> Name </h6>
                    <input className={classes.titleInputControl} placeholder='e.g. Web Design'/>
                </div>
                <div className={classes.columns}>
                    <h6 className={classes.inputLabel}> Columns </h6>
                    {
                        columns.map( (column: string , index: number) => {
                            return (
                                <InputGroup key={index} status={column} />
                            )
                        }) 
                    }
                    <button className={classes.addNewColumn} onClick={addNewColumnHandler}> + Add New Column </button>
                </div>
                <button className={classes.createBoardButton} onClick={addNewBoardHandler}> Create New Board </button>
            </div>
        </React.Fragment>
    )
};

export default AddNewBoardModal;