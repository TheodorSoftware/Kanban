import React, { useEffect, useState } from 'react';
import './taskBoard.css';
import TaskColumn from './TaskColumn/TaskColumn';
import TaskStatus from './TaskColumn/TaskStatus/TaskStatus';
import { useDispatch, useSelector } from 'react-redux';
import Task from '../../interfaces/task.interface';
import { fetchTasksData, selectTasksData, selectTasksStatus } from '../../store/tasksSlice';
import { Status } from '../../interfaces/status.enum';
import { isEmpty } from 'ramda';
import AddNewTaskModal from '../Modals/AddNewTaskModal/addNewTaskModal';

const TaskBoard = (props:any) => {

    const dispatch = useDispatch();
    
    const tasksStatus: string = useSelector(selectTasksStatus);
    const tasksData: {id: string, task: Task[]} = useSelector(selectTasksData);
    const [statusArray, setStatusArray] = useState<string[]>([]);

    useEffect(()=> {
        dispatch(fetchTasksData(props.boardName));
    } ,[dispatch, props.boardName]);    

    useEffect(() => {
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
            setStatusArray(taskStatusArray);
        }
    }, [tasksStatus]);

    return (
        <React.Fragment>
            <div className='taskBoard'>
                {
                    statusArray.map((status: string,index: number) => {
                        let arrayTasks: Task[] = [];
                        tasksData.task?.map((task: Task) => {
                            if(status === task.status){
                                arrayTasks.push(task);
                            }
                        })
                        return(
                            <React.Fragment>
                                <TaskColumn key={index} status={status} tasks={arrayTasks}></TaskColumn>
                            </React.Fragment>
                        )
                    })
                }
                <TaskColumn></TaskColumn>
            </div>
        </React.Fragment>
    )
};

export default TaskBoard;