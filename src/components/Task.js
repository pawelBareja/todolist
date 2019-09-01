import React from 'react';



const Task = (props) => {
    return (
        <div>
            {props.task.text}
        </div>
    );
};

export default Task;