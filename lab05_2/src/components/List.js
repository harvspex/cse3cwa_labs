import { useState } from "react";

function Task(props) {

	console.log(props);

	function onChange() {
		// Find the task to be updated, and update it
		props.setTasks(tasks => tasks.map(task => {
			if (task.id === props.id) {
				return {
					id: task.id,
					description: task.description,
					completed: !task.completed
				};
			} else {
				return task;
			}
		}));
	}

	function onClick() {
		// Find the task to be deleted, and remove it
		props.setTasks(tasks => tasks.filter(task => task.id !== props.id));
	}

	return (
		<li>
			<button type="button" onClick={onClick}>X</button>
			{ props.description }
			<input
				type="checkbox"
				checked={props.completed}
				onChange={onChange}
			/>
		</li>
	);
}

// This is a "stateless functional component"
function List(props) {

	return (
		<div>
			<h1>{ props.heading }</h1>
			<ul>
				{ props.tasks.map(task => 
					<Task
						setTasks={props.setTasks}
						id={task.id}
						description={task.description}
						completed={task.completed}
					/>
				)}
			</ul>
		</div>
	);
}

export default List;
