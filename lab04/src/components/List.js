function Task(props) {
	return (
		<li>
			{props.description}
			<input type="checkbox" checked={props.completed} readOnly />
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
						description={task.description}
						completed={task.completed}
					/>
				)}
			</ul>
		</div>
	);
}

export default List;
