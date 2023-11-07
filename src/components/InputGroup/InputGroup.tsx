import React from "react";
import classes from './InputGroup.module.css';

const InputGroup = (props: any) => {

    function deleteColumnHandler(){
        console.log('delete ' + props.status);
    };

    return (
        <React.Fragment>
            <div className={classes.columnsGroup}>
                <input className={classes.columnsGroupInput} placeholder={props.status}/>
                <button className={classes.columnsGroupButton} onClick={deleteColumnHandler}> x </button>
            </div>
        </React.Fragment>
    )
};

export default InputGroup;