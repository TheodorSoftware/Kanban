import React, { Dispatch } from 'react';
import './TaskElement.css';
import { AnyAction } from 'redux';
import { useDispatch } from 'react-redux';
import { actionModalSlice } from '../../../../store/modalSlice';

const TaskElement = (props: any) => {

    const dispatch: Dispatch<AnyAction> = useDispatch();


    function openTaskModal(){
        dispatch(actionModalSlice.openAddNewTaskModal());
    }

    return(
        <React.Fragment>
            <button onClick={openTaskModal} className='task'>
                <h4 className='taskTitle'> {props.title} </h4>
                <h5 className='taskSubtitle'> 0 of 6 subtasks </h5>
            </button>
        </React.Fragment>
    )
};

export default TaskElement;
