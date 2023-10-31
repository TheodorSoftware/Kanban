import React from 'react';
import './TaskColumn.css';
import TaskStatus from './TaskStatus/TaskStatus';
import Task from '../../../interfaces/task.interface';
import TaskElement from './Task/TaskElement';

const TaskColumn = (props:any) => {

    function handlerNewColumn(){
        console.log('open new Column Modal!');
    }

    return(
        <React.Fragment>
            <div className='taskColumn'>
                {
                    props.tasks ? 
                    <React.Fragment>
                        <TaskStatus status={props.status} length={props.tasks?.length}> </TaskStatus>
                        <div className='taskColumnContent'>
                            {
                                props.tasks.map( (taskItem: Task,index:number) => {
                                    return <TaskElement key={index} title={taskItem.title}></TaskElement>
                                })
                            }
                        </div>
                    </React.Fragment>
                    : 
                    <React.Fragment>
                        <div className='taskEmptyColumn'>
                            <button onClick={handlerNewColumn} className="newColumnButton"> + New Column </button>
                        </div>
                    </React.Fragment>
                }
            </div>
        </React.Fragment>
    )
};

export default TaskColumn;