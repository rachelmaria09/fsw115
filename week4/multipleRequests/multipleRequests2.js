var btn2 = document.getElementById("btn2")

function btnClick(){
    axios.get("https://rickandmortyapi.com/api/episode")
    .then(response => {
        for(let i = 0; i < response.data.length; i++) {
            const episodes = document.createElement('div')
            document.body.append(div)
        }
     })
     .catch(error => console.error(error))
}
btn2.addEventListener("click", btnClick)