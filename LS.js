class LS {
    constructor() {
        this.defaultCity = 'Tallinn'
        this.city
    }

    getCity(){
        if(localStorage.getItem('city') === null){
            this.city = this.defaultCity
        } else {
            this.city = localStorage.getItem('city')
        }
        return this.city
    }

    setCity(City){
        localStorage.setItem('city', city)
    }
}
