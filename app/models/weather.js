export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin


    //TODO You should probably convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

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