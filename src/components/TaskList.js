import React from 'react';
import Task from "./Task";


const TaskList = (props) => {

    const tasks = props.tasks.map(task => <Task key={props.tasks.id} task={task} markTask={props.markTaskDone} deleteTask={props.deleteTask} />)

    return (
        <div>
            <div className="taskActive">
                <h2>To do list</h2>
                {tasks}
            </div>
            <hr />
            <div className="taskDone">
                <h2>Done tasks</h2>
                <h3>Sum of the tasks done (0)</h3>
            </div>

        </div>
    );
};

export default TaskList;