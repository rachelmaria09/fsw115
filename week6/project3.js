const getStarWarsPeople = async () => { 
    try {
    document.getElementById('wrapper').innerHTML=""
    const peopleData = await axios.get('https://swapi.dev/api/people')
    // .then(res => {console.log(res.data)
        for(let i = 0; i < peopleData.data.results.length; i++) {
            const people = document.createElement('div')
            people.textContent = peopleData.data.results[i].name
            document.getElementById('wrapper').appendChild(people)
        }
    // })
    // .catch(err => {console.log(err)})
    } catch{
        (err => {console.log(err)})
    }
}

const getStarWarsPlanets = async () => {
    try {
    document.getElementById('wrapper').innerHTML=""
    const planetsData = await axios.get('https://swapi.dev/api/planets')
    // .then(res => {console.log(res.data)
        for(let i=0; i < planetsData.data.results.length; i++){
            const planets = document.createElement('div')
            planets.textContent = planetsData.data.results[i].name
            document.getElementById('wrapper').appendChild(planets)
        }
    // })
    // .catch(err => console.log(err))
    } catch{
        (err => {console.log(err)})
    }
}

const getStarWarsStarships = async () => {
    try {
    document.getElementById('wrapper').innerHTML=""
    const starshipsData = await axios.get('https://swapi.dev/api/starships')
    // .then(res => {console.log(res.data)
        for(let i=0; i < starshipsData.data.results.length; i++){
            const starships = document.createElement('div')
            starships.textContent = starshipsData.data.results[i].name
            document.getElementById('wrapper').appendChild(starships)
        }
    // })
    // .catch(err => console.log(err))
    } catch {
        (err => {console.log(err)})
    }
}