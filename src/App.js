import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const todoListData = [
	{
		task: 'Organize Garage',
		id: 12,
		completed: false
	},
	{
		task: 'Bake Cookies',
		id: 1528817084358,
		completed: false
	},
	{
		task: 'Learn setState()',
		id: Date.now(),
		completed: false
	}
];

class App extends React.Component {
	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state
	constructor() {
		super();
		this.state = {
			todos: todoListData,
			task: ''
		};
	}

	handleChanges = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	addNew = (event) => {
		event.preventDefault();
		this.setState({
			todos: [ ...this.state.todos, { task: this.state.task, id: Date.now(), completes: false } ],
			task: ''
		});
	};

	toggleCompleted = (id) => {
		this.setState({
			todos: this.state.todos.map((todo) => {
				if (todo.id === id) {
					return {
						...todo,
						completed: !todo.completed
					};
				}
				return todo;
			})
		});
	};

	clearCompleted = (event) => {
		event.preventDefault();
		this.setState({
			todos: this.state.todos.filter((todo) => !todo.completed)
		});
	};

	render() {
		return (
			<div className="App-container">
				<h2>Todo List!</h2>
				<TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted} />
				<TodoForm
					addNew={this.addNew}
					handleChanges={this.handleChanges}
					task={this.state.task}
					clearCompleted={this.clearCompleted}
				/>
			</div>
		);
	}
}

export default App;
