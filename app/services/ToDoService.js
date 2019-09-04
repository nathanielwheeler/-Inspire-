import ToDo from "../models/ToDo.js"
//NOTE your service is all set up for the observer pattern but there is still work to be done

// @ts-ignore
const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/nathan/todos/',
	timeout: 3000
});

let _state = {
	todos: [],
	error: {},
}
let _subscribers = {
	todos: [],
	error: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn())
}

export default class TodoService {
	get TodoError() {
		return _state.error
	}

	get Todos() {
		return _state.todos
	}

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	getTodos() {
		console.log("Getting the Todo List")
		todoApi.get()
			.then(res => {
				console.log("in the service getting todos: ", res.data.data);

				// FIXME drill into res.data to get to the data array
				_setState('todos', res.data.data)
			})
			// .catch(err => _setState('error', err.response.data))
			.catch(err => console.error(err))
	}

	// getTodoNumber() {
	// 	let todoNumLength = _state.todos.length()
	// }

	addTodo(todo) {
		todoApi.post('', todo)
			.then(res => {
				//TODO Handle this response from the server (hint: what data comes back, do you want this?)
				_setState('todos', res.data.data)
			})
			.catch(err => console.error(err))
	}

	toggleTodoStatus(todoId) {
		let todo = _state.todos.find(todo => todo._id == todoId)
		//TODO Make sure that you found a todo, 
		//		and if you did find one
		//		change its completed status to whatever it is not (ex: false => true or true => false)
		if (!todo) {
			console.log('No such todo ID')
		} else {
			!todo.completed
		}

		todoApi.put(todoId, todo)
			.then(res => {
				//TODO do you care about this data? or should you go get something else?
				_setState('todos', res.data.data)
			})
			//FIXME can't drill into err object with .response.data
			.catch(err => console.error(err))
	}

	removeTodo(todoId) {
		//TODO Work through this one on your own
		//		what is the request type
		//		once the response comes back, what do you need to insure happens?
	}


}
