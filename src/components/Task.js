import React from 'react';



const Task = (props) => {

    const { text, date, id, active, important, finishDate } = props.task

    let completionDate = new Date(finishDate).toLocaleString()

    if (active) {
        return (
            <div>
                <p className={important ? "active" : "notactive"}> {text} <span> {date}
                </span>
                    <button onClick={() => props.markTask(id)}>mark it done</button>
                    <button onClick={() => props.deleteTask(id)}>remove</button>
                </p>
            </div>
        );
    } else {



        return (

            < div >
                <p>{text} <span> Planned date of completion-{date}
                </span>
                </p>
                <p>Date of competion {completionDate}</p>
                <button onClick={() => props.deleteTask(id)}>remove</button>

            </div >
        );

    }
};

export default Task;