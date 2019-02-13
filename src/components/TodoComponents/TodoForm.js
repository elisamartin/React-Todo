import React from 'react';

function TodoForm(props) {
	return (
		<form>
			<input value={props.task} type="text" name="task" placeholder="...todo" onChange={props.handleChanges} />
			<button onClick={props.addNew}>Add Todo</button>
			<button onClick={props.clearCompleted}>Clear Completed</button>
		</form>
	);
}

export default TodoForm;
