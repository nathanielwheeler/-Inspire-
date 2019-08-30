import WeatherController from "./controllers/WeatherController.js";
import ToDoController from "./controllers/ToDoController.js";
import QuoteController from "./controllers/QuoteController.js";
import ImageController from "./controllers/ImageController.js";

class App {
  constructor() {
    this.controllers = {
      weatherCtrl: new WeatherController(),
      todoCtrl: new ToDoController(),
      quoteCtrl: new QuoteController(),
      imageCtrl: new ImageController()
    }
  }
}

window['app'] = new App()  