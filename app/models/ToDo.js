export default class ToDo {
    constructor(data) {
        // console.log('todo');
        this._id = data._id
    }

    get Template() {
        return `
		<form onsubmit="app.controllers.todoCtrl.addTodo(todo)">
            <div class="input-group">
                <div class="form-group">
                    <input type="text" class="form-control" name="todo" placeholder="To Do:" required>
                </div>
                <div class="form-group append">
                	<button class="btn btn-outline-success" type="submit">+</button>
                </div>
            </div>
        </form>
        `
    }
}