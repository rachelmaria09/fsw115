var btn1 = document.getElementById("btn1")

function btnClick(){
    axios.get("https://rickandmortyapi.com/api/character")
    .then(response => {
        for(let i = 0; i < response.data.results.length; i++) {
            const characters = document.createElement('div')
            characters.textContent = response.data.results[i].name
            document.body.append(characters)
        }
     })
     .catch(error => console.error(error))
    }
btn1.addEventListener("click", btnClick)
