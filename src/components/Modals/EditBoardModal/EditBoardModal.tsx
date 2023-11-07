import React, { Dispatch, useEffect, useState } from "react";
import classes from './EditBoardModal.module.css';
import { useDispatch, useSelector } from "react-redux";
import { actionModalSlice, selectBoardId } from "../../../store/modalSlice";
import { useParams } from "react-router-dom";
import { AnyAction } from "redux";
import { selectTasksData, selectTasksStatus } from "../../../store/tasksSlice";
import Task from "../../../interfaces/task.interface";
import { isEmpty } from "ramda";

const EditBoardModal = () => {
    
    const dispatch: Dispatch<AnyAction> = useDispatch();

    function handleClose() {
        dispatch(actionModalSlice.closeAddColumnModal());
    }

    return (
        <React.Fragment>
            <div className={classes.modal}>
                <div className={classes.titleGroup}>
                    <h3 className={classes.modalTitle}> Add New Column </h3>
                    <button onClick={handleClose} className={classes.closeButton}>
                        Close
                    </button>
                </div>
                <div className={classes.titleInput}>
                    <h6 className={classes.inputLabel}> Board Name </h6>
                    <input className={classes.titleInputControl} placeholder='Platform Launch'/>
                </div>
                <div className={classes.boardName}>
                    <h6 className={classes.inputLabel}> Board Columns </h6>
                    <div className={classes.boardNameGroup}>
                        <input className={classes.boardNameGroupInput} placeholder='Column Name'/>
                        <button className={classes.boardNameGroupButton}> x </button>
                    </div>
                    <div className={classes.boardNameGroup}>
                        <input className={classes.boardNameGroupInput} placeholder='Column Name'/>
                        <button className={classes.boardNameGroupButton}> x </button>
                    </div>
                    <div className={classes.boardNameGroup}>
                        <input className={classes.boardNameGroupInput} placeholder='Column Name'/>
                        <button className={classes.boardNameGroupButton}> x </button>
                    </div>
                </div>
                <button className={classes.createColumnButton}> + Add New Column </button>
                <button className={classes.saveButton}> Save Changes </button>
            </div>
        </React.Fragment>
    )
};

export default EditBoardModal;