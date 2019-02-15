import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

import './App.css';

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
		task: 'Bake Cookies',
		id: 15288170843585,
		completed: false
	}
];

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			todos: todoListData,
			task: '',
			search: ''
		};
	}

	// Search start ------------------------------------------

	handleSearch = (event) => {
		this.setState({
			todos: this.state.todos.filter((item) => {
				return item.task.includes(event.target.value);
			})
		});
	};

	handleChanges = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	addNew = (event) => {
		event.preventDefault();
		const newTask = [ ...this.state.todos, { task: this.state.task, id: Date.now(), completes: false } ];
		localStorage.setItem('todo', JSON.stringify(newTask)); //------Storage---------------------------------------------------
		this.setState({
			todos: newTask,
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
		const completedTasks = this.state.todos.filter((item) => item.completed !== true);
		localStorage.setItem('todo', JSON.stringify(completedTasks)); //------Storage---------------------------------------------------
		this.setState({ todos: completedTasks });
	};

	componentDidMount() {
		const storedTodo = JSON.parse(localStorage.getItem('todo')); //------Storage---------------------------------------------------
		if (storedTodo) {
			this.setState({ todos: storedTodo });
		}
	}

	render() {
		return (
			<div className="app-container">
				<h2>Todo List!</h2>
				<TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted} />
				<TodoForm
					addNew={this.addNew}
					handleChanges={this.handleChanges}
					task={this.state.task}
					clearCompleted={this.clearCompleted}
					searchText={this.state.search}
					handleSearch={this.handleSearch}
					searchItem={this.searchItem}
				/>
			</div>
		);
	}
}

export default App;
