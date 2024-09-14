import React, { useState } from 'react';
import Task from './Task';

function List({ list }) {
    const [tasks, setTasks] = useState([
        { id: 1, name: 'Task 1', completed: false },
        { id: 2, name: 'Task 2', completed: false },
        { id: 3, name: 'Task 3', completed: false },
        { id: 4, name: 'Task 3', completed: false }
    ]);

    return (
        <div>
            <h2>{list.name}</h2>
            {tasks.map((task) => (
                <Task key={task.id} task={task} />
            ))}
        </div>
    );
}

export default List;
