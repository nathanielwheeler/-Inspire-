import WeatherService from "../services/WeatherService.js";

let _ws = new WeatherService()

//NOTE The weather service and controller are mostly done, 
//		you may wish to check out the model and include some additional data.


//TODO Complete rendering data to the screen
function _drawWeather() {
	console.log("THE WEATHER MAN SAYS:", _ws.Weather)
	document.getElementById('weather').innerHTML = _ws.Weather.Template
}

export default class WeatherController {

	constructor() {
		_ws.addSubscriber('weather', _drawWeather)
		_ws.getWeather()
	}

}
