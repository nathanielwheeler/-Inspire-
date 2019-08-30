import WeatherService from "../services/WeatherService.js";

var _ws = new WeatherService()

//NOTE The weather service and controller are mostly done, 
//		you may wish to check out the model and include some additional data.


//TODO Complete rendering data to the screen
function drawWeather() {
	console.log("THE WEATHER MAN SAYS:", _ws.Weather)
}

export default class WeatherController {

	constructor() {
		_ws.addSubscriber('weather', drawWeather)
		_ws.getWeather()
	}

}
