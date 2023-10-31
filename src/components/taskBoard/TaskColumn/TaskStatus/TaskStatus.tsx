import React from 'react';
import './TaskStatus.css';
const TaskStatus = (props:any) => {
    return (
        <React.Fragment>
            <div className='taskStatus'>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <circle cx="7.5" cy="7.5" r="7.5" fill="#49C4E5"/>
                </svg>
                <h5 className='taskStatusName'> {props.status} ({props.length}) </h5>
            </div>
        </React.Fragment>
    )
};

export default TaskStatus;