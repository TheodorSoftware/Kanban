import React from 'react';
import './TaskElement.css';

const TaskElement = (props: any) => {

    function openTaskModal(){
        //TODO
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
