import React, { useState } from 'react';

function Task({ task }) {
    const [isCompleted, setIsCompleted] = useState(task.completed);
    const [isEditing, setIsEditing] = useState(false);
    const [taskName, setTaskName] = useState(task.name);

    const toggleCompletion = () => {
        setIsCompleted(!isCompleted);
        console.log(`Task "${taskName}" completed status: ${!isCompleted}`);
    };

    const toggleEditing = () => {
        setIsEditing(!isEditing);
        console.log(`Task "${taskName}" editing status: ${!isEditing}`);
    };

    const handleNameChange = (e) => {
        setTaskName(e.target.value);
    };

    return (
        <div>
            {isEditing ? (
                <input
                    type="text"
                    value={taskName}
                    onChange={handleNameChange}
                />
            ) : (
                <span
                    style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}
                >{taskName}
                </span>
            )}

            <button onClick={toggleCompletion}>
                {isCompleted ? 'Undo' : 'Complete'}
            </button>

            <button onClick={toggleEditing}>
                {isEditing ? 'Save' : 'Edit'}
            </button>
        </div>
    );
}

export default Task;
