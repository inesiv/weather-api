class Weather{
    constructor(city) {
        this.city = city
        this.key = 'b2942e173241588e7bfa51ad9a15fc6a'
    }

    async getWeather() {
        const  response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`)
        const responseData = await response.json()
        return responseData
    }

    changeCity(city) {
        this.city = city
    }
    
}
