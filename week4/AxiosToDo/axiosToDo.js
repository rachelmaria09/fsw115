axios.get("https://api.vschool.io/rachelgildea/todo")
.then(response => {
    console.log(response.data)
    for(let i = 0; i < response.data.length; i++) {
        const todos = document.createElement('div')
        todos.textContent = response.data[i].title
        document.body.append(todos)
                if(response.data[i].completed !== true) {
                    todos.style.textDecoration = "line-through"
                }
            }
 })
 .catch(error => console.error(error))