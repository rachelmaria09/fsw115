axios.get("https://api.vschool.io/rachelgildea/todo")
.then(response => {
    console.log(response.data)
    for(let i = 0; i < response.data.length; i++) {
        const episodes = document.createElement('div')
        episodes.textContent = response.data[i].title
        document.body.append(episodes)
    }
 })
 .catch(error => console.error(error))