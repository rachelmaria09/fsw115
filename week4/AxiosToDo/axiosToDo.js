//Title
document.head = "ToDo List"

//GET
axios.get("https://api.vschool.io/rachelgildea/todo")
    .then(response => {
        for(let i = 0; i < response.data.length; i++) {
            const todoList = document.createElement('div')
            todoList.textContent = response.data[i].title
            document.body.appendChild(todoList)
        }
    })
    .catch(error => console.log(error))

// //POST
// axios.post(https://api.vschool.io/rachelgildea/todo, {
//     name: "Rachel",
    
// })