export default class ToDo {
    constructor(data) {
        // console.log('todo');
        //FIXME MODEL needs to mirror backend model, can be found in ReadMe
        this._id = data._id
        // this.todo = data.todo
    }

    //TODO create template that is a list item for each to do item that has the methods for removing and toggling the status
    //look into terneries for how to apply the 'checked' attribute or a CSS class
    //this._id - remove method and for toggle method
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