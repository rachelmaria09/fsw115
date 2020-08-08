var weather = [
    {
        "id": 300,
        "main": "Drizzle",
        "description": "light intensity drizzle",
        "icon": "09d",
        "base": "stations",
        "temp": 280.32,
        "pressure": 1012,
        "humidity": 81,
        "temp_min": 279.15,
        "temp_max": 281.15,
        "visibility": 10000,
        "speed": 4.1,
        "deg": 80,
        "all": 90,
        "dt": 1485789600,
        "type": 1,
        "id": 5091,
        "message": 0.0103,
        "country": "GB",
        "sunrise": 1485762037,
        "sunset": 1485794875,
        "id": 2643743,
        "name": "London",
        "cod": 200
        }
]

var weatherList = document.getElementById("list")

for (var i = 0; i < weather.length; i++) {
    const obj = weather[i]
        for (var x = 0; x < Object.keys(obj).length; x++) {
        console.log(Object.keys(obj)[x])
        var newWeather = document.createElement("li")
        newWeather.textContent = Object.keys(obj)[x] + ": " + Object.values(obj)[x]
        weatherList.append(newWeather)
    }
}