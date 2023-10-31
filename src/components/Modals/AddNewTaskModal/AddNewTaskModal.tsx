import React from 'react';
import classes from './AddNewTaskModal.module.css';

const AddNewTaskModal = (props:any) => {
    return(
        <React.Fragment>
            <div className={classes.modal}>
                <h3 className={classes.modalTitle}> Add New Task </h3>
                <div className={classes.titleInput}>
                    <h6 className={classes.inputLabel}> Title </h6>
                    <input className={classes.titleInputControl} placeholder='e.g. Take coffe break'/>
                </div>
                <div className={classes.descriptionInput}>
                    <h6 className={classes.inputLabel}> Description </h6>
                    <textarea className={classes.descriptionInputTextarea} placeholder='e.g. Its always good to take a break'> </textarea>
                </div>
                <div className={classes.subtasks}>
                    <div className={classes.subtasksGroup}>
                        <input className={classes.inputLabel} placeholder='Subtasks'/>
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
        </React.Fragment>
    )
};

export default AddNewTaskModal;