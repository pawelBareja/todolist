import React from 'react';



const Task = (props) => {

    const { text, date, id } = props.task

    return (
        <div>
            <p>{text} <span> {date}
            </span>
                <button onClick={() => props.markTask(id)}>mark it done</button>
                <button onClick={() => props.deleteTask(id)}>remove</button>
            </p>
        </div>
    );
};

export default Task;