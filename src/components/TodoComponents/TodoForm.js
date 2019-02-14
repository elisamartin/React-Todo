import React from 'react';

function TodoForm(props) {
	return (
		<form>
			<input
				value={props.task}
				type="text"
				name="task"
				placeholder="Your task here"
				onChange={props.handleChanges}
			/>
			<button onClick={props.addNew}>Add Todo</button>
			<button onClick={props.clearCompleted}>Clear Completed</button>
			<input
				type="text"
				name="searchText"
				placeholder="Search your tasks"
				value={props.search}
				onChange={props.handleSearch}
			/>
		</form>
	);
}

export default TodoForm;
