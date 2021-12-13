function weatherDataFetch(city) {
    var key ='98060bc84d50afb1baef880decdebb28';
    fetch('https.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}') 
    .then(function(resp) {
        return resp.json()
    }) //convert data to json
    .then(function(data) {
        console.log(data);
    })
    .catch(function() {
        //catch aany errors
    });

    function cityWeather(e) {
        weatherDataFetch('Tallinn');
    }
}
