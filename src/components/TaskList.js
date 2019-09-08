import React from 'react';
import Task from "./Task";


const TaskList = (props) => {

    let notCompleted = props.tasks.filter(task => task.active)
    let completed = props.tasks.filter(task => !task.active)

    const tasksToDo = notCompleted.map(task => <Task key={props.tasks.id} task={task} markTask={props.markTaskDone} deleteTask={props.deleteTask} />)
    const tasksCompleted = completed.map(task => <Task key={props.tasks.id} task={task} markTask={props.markTaskDone} deleteTask={props.deleteTask} />)
    return (
        <div>
            <div className="taskActive">
                {tasksToDo.length < 1 ? <p>You do not have any planned tasks</p> : tasksToDo}
            </div>
            <hr />
            <div className="taskDone">
                <h2>Done tasks</h2>
                <h3>Sum of the tasks done ({tasksCompleted.length})</h3>
                {tasksCompleted.length > 3 && <p>See below last tasks completed</p>}
                {tasksCompleted.slice(0, 3)}

            </div>

        </div>
    );
};

export default TaskList;