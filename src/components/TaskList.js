import React from 'react';
import Task from "./Task";


const TaskList = (props) => {

    const tasks = props.tasks.map(task => <Task key={props.tasks.id} task={task} />)

    return (
        <div>
            {tasks}
        </div>
    );
};

export default TaskList;