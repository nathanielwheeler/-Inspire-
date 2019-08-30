export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);

    this.city = data.name
    this.temp = {
      current: {
        kelvin: data.main.temp,
        fahrenheit: ((this.temp.current.kelvin - 273.15) * (9 / 5)) + 32,
        celsius: this.temp.current.kelvin - 273.15
      },
      high: {
        kelvin: data.main.temp_max,
        fahrenheit: ((this.temp.high.kelvin - 273.15) * (9 / 5)) + 32,
        celsius: this.temp.high.kelvin - 273.15
      },
      low: {
        kelvin: data.main.temp_min,
        fahrenheit: ((this.temp.low.kelvin - 273.15) * (9 / 5)) + 32,
        celsius: this.temp.low.kelvin - 273.15
      }
    }

  }

  get Template() {
    return `
    
    `
  }
}