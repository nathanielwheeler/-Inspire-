export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);

    this.city = data.name
    this.temp = {
      current: {
        kelvin: data.main.temp,
        // fahrenheit: ((this.temp.current.kelvin - 273.15) * (9 / 5)) + 32,
        // celsius: this.temp.current.kelvin - 273.15
      },
      high: {
        kelvin: data.main.temp_max,
        // fahrenheit: ((this.temp.high.kelvin - 273.15) * (9 / 5)) + 32,
        // celsius: this.temp.high.kelvin - 273.15
      },
      low: {
        kelvin: data.main.temp_min,
        // fahrenheit: ((this.temp.low.kelvin - 273.15) * (9 / 5)) + 32,
        // celsius: this.temp.low.kelvin - 273.15
      }
    }
    this.getIconUrl() = { //FIXME

    }
  }

  get Template() {
    return `
    <div class='weather-card'>
      <div class='temp-flex'>
        <h4>tempNum</h4>
        <a onclick='app.controllers.weatherCtrl.tempTypeToggle()'>°F</a>
      </div>
      <div class='hi-temp-flex'>
      </div>
      <div class='lo-temp-flex'>
      </div>
      <div class='weather-icon-flex'>
        <img src='${this.getIconUrl()}'>
      </div>
    </div>
    `
  }
}