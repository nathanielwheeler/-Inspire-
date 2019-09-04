export default class ToDo {
    constructor(data) {
        this._id = data._id
        this.completed = data.completed || false
        // this.user = data.user
        this.description = data.description
    }

    //TODO create template that is a list item for each to do item that has the methods for removing and toggling the status
    //look into terneries for how to apply the 'checked' attribute or a CSS class DONE
    //this._id - remove method and for toggle method
    get Template() {
        console.log('ToDo Template accessed')
        return `
        <li>
            <input type='checkbox' name='completed' onclick='app.controllers.todoCtrl.toggleTodoStatus(${this._id})' ${(this.completed ? 'checked' : '')}>
            ${this.description}
            <a onclick='app.controllers.todoCtrl.removeTodo(${this._id})'> X </a>
		</li>`

    }
}