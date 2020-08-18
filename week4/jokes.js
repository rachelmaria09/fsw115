const getJoke = () => {
    //https://sv443.net/jokeapi/v2/joke/Any
    let xhttp = new XMLHttpRequest()
    console.dir(xhttp)

    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
           let jokeData = JSON.parse(xhttp.response)
           displayJoke(jokeData)
        }
    }

    xhttp.open('GET', 'https://sv443.net/jokeapi/v2/joke/Any', true)
    xhttp.send()
}

const displayJoke = (jokeData) => {
    console.log(jokeData)
    document.getElementById('jokeSetUp').innerHTML = jokeData.setup
    document.getElementById('jokePunchLine').innerHTML = jokeData.delivery
}