import React from 'react';
import classes from './AddNewTaskModal.module.css';
import ReactPortal from '../../ReactPortal/ReactPortal';
import { useDispatch } from 'react-redux';
import { actionModalSlice } from '../../../store/modalSlice';

const AddNewTaskModal = ( (props:any) => {
    const dispatch = useDispatch();

    function handleClose(){
        dispatch(actionModalSlice.closeAddNewTaskModal());
    }

    return(
        <div className={classes.modal}>
            <div className={classes.titleGroup}>
                <h3 className={classes.modalTitle}> Add New Task </h3>
                <button onClick={handleClose} className={classes.closeButton}>
                    Close
                </button>
            </div>
            <div className={classes.titleInput}>
                <h6 className={classes.inputLabel}> Title </h6>
                <input className={classes.titleInputControl} placeholder='e.g. Take coffe break'/>
            </div>
            <div className={classes.descriptionInput}>
                <h6 className={classes.inputLabel}> Description </h6>
                <textarea className={classes.descriptionInputTextarea} placeholder='e.g. Its always good to take a break'> </textarea>
            </div>
            <div className={classes.subtasks}>
                <h6 className={classes.inputLabel}> Subtasks </h6>
                <div className={classes.subtasksGroup}>
                    <input className={classes.subtasksGroupInput} placeholder='Subtasks'/>
                    <button className={classes.subtasksGroupButton}> x </button>
                </div>
                <div className={classes.subtasksGroup}>
                    <input className={classes.subtasksGroupInput} placeholder='Subtasks'/>
                    <button className={classes.subtasksGroupButton}> x </button>
                </div>
                <button className={classes.addNewSubtask}> + Add New Subtask </button>
            </div>
            <div className={classes.status}>
                <h6 className={classes.inputLabel}> Status </h6>
                <select className={classes.statusControl}>
                    <option value="TODO"> TODO </option>
                </select>
            </div>
            <button className={classes.createTaskButton}> Create Task </button>
        </div>
    )
});

export default AddNewTaskModal;