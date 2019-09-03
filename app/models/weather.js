export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);

    this.city = data.name
    this.temp = {
      current: {
        kelvin: data.main.temp.toFixed(2),
        fahrenheit: (((data.main.temp - 273.15) * (9 / 5)) + 32).toFixed(2),
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

  }

  get Template() {
    return `
    <div class='weather-card'>
      <div class='temp-flex'>
        <h4>${this.temp.current.fahrenheit} °F</h4>
      </div>
   
    </div>
    `
    //   < a onclick = 'app.controllers.weatherCtrl.tempTypeToggle()' >°F</a >
    // 
    //   <div class='hi-temp-flex'>
    //   </div >
    //   <div class='lo-temp-flex'>
    //   </div>
    //   <div class='weather-icon-flex'>
    //     <img src='${this.getIconUrl()}'>
    //   </div>
  }
}