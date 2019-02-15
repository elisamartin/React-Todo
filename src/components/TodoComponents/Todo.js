import React from 'react';

function Todo(props) {
	return (
		<div
			className="todo"
			style={{ textDecoration: props.todo.completed ? 'line-through' : '' }}
			onClick={(event) => props.toggleCompleted(props.todo.id)}
		>
			{props.todo.task}
		</div>
	);
}

export default Todo;
