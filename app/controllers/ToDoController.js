import ToDoService from "../services/ToDoService.js";


let _ts = new ToDoService()

//TODO Create the render function
function _drawTodos() {

	console.log(_ts.Todos);

	debugger
	let template = ''
	_ts.Todos.forEach((t) => {
		template += t.Template
	})
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

	addTodo(event) {
		event.preventDefault();
		let form = event.target
		let todo = {
			//TODO build the todo object from the data that comes into this method
			description: form.description.value
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
