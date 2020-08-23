var btn2 = document.getElementById("btn2")

function btnClick(){
    axios.get("https://rickandmortyapi.com/api/episode")
    .then(response => {
        for(let i = 0; i < response.data.results.length; i++) {
            const episodes = document.createElement('div')
            episodes.textContent = response.data.results[i].name
            document.body.append(episodes)
        }
     })
     .catch(error => console.error(error))
}
btn2.addEventListener("click", btnClick)