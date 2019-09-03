import ToDoService from "../services/ToDoService.js";


let _ts = new ToDoService()

//TODO Create the render function
function _drawTodos() {
	let template = `
		<div class='todo-card'>
		<h4> Task Remaining: 0</h4>
		<ul>
	`
	let todos = _ts.Todos
	todos.forEach((t) => {
		template += `
		<li>
			<a onclick='app.controllers.todoCtrl.removeTodo(${this._id})'> 
			${this.todo}
		</li>
		`
	})
	template += `</ul></div>`
	document.getElementById('todos').innerHTML = template
}

//NOTE Keep an eye on your console for any of these errors
function _drawError() {
	console.error('[TODO ERROR]', _ts.TodoError)
}


export default class TodoController {
	constructor() {
		//TODO Remember to register your subscribers
		_ts.addSubscriber('error', _drawError)
		_ts.addSubscriber('todos', _drawTodos)
		_ts.getTodos()
	}

	addTodo(e) {
		e.preventDefault()
		var form = e.target
		var todo = {
			//TODO build the todo object from the data that comes into this method
		}
		_ts.addTodo(todo)
	}

	//NOTE This method will pass an Id to your service for the TODO that will need to be toggled
	toggleTodoStatus(todoId) {
		_ts.toggleTodoStatus(todoId)
	}

	//NOTE This method will pass an Id to your service for the TODO that will need to be deleted
	removeTodo(todoId) {
		_ts.removeTodo(todoId)
	}



}
