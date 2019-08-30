import WeatherController from "./controllers/WeatherController.js";
import TodoController from "./controllers/ToDoController.js";
import QuoteController from "./controllers/QuoteController.js";
import ImageController from "./controllers/ImageController.js";

class App {
  constructor() {
    this.controllers = {
      weatherController: new WeatherController(),
      todoController: new ToDoController(),
      quoteController: new QuoteController(),
      imageController: new ImageController()
    }
  }
}

window['app'] = new App()  