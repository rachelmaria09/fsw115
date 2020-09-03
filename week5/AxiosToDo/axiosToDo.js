//get
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
        let checkbox = document.createElement('input')
            checkbox.type="checkbox"
            todos.appendChild(checkbox)
 })
 .catch(error => console.error(error))

 //post
const todoForm = document.todoForm

todoForm.addEventListener("submit", function(event){
    event.preventDefault()

    const newTodo = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        price: todoForm.price.value
    }

    axios.post("https://api.vschool.io/rachelgildea/todo", newTodo)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))
})

//put
axios.put("https://api.vschool.io/rachelgildea/todo/<id>", {})
    .then(response => console.log(response.data))
    .catch(error => console.log(error))