axios.get("https://rickandmortyapi.com/api/character")
.then(response => {
    for(let i = 0; i < response.data.length; i++) {
        const h1 = document.createElement('h1')
        h1.textContent = response.date[i].title
        document.body.appendChild(h1)
    }
})
.catch(error => console.log(error))