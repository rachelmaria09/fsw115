//get
axios.get("https://api.vschool.io/rachelgildea/todo")
.then(response => {
    console.log(response.data)
    for(let i = 0; i < response.data.length; i++) {
        const todos = document.createElement('div')
        todos.textContent = response.data[i].title
        var id = response.data[i]._id
        if(response.data[i].completed) {checkbox.checked = true}
        const checkbox = document.createElement('input')
        checkbox.type="checkbox"
        checkbox.addEventListener("click", function(event) {
            if(checkbox.checked === true) {
                todos.style.textDecoration = "line-through"
            } if(checkbox.checked === false) {
                todos.style.textDecoration = "none"
            }
        axios.put(`https://api.vschool.io/rachelgildea/todo/${id}`, {completed: checkbox.checked})
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
        })

        const deleteBtn = document.createElement('button')
        todos.append(deleteBtn)
        deleteBtn.textContent = "X"
        deleteBtn.addEventListener("click", function(event) {
            //delete
            axios.delete(`https://api.vschool.io/rachelgildea/todo/${id}`)
            .then(response => console.log(response))
            .catch(error=> console.log(error))
        })

        todos.appendChild(checkbox)
        document.body.append(todos)
            if(response.data === true) {
                todos.style.textDecoration = "line-through"
            }
    }
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
    console.log(newTodo)

    axios.post("https://api.vschool.io/rachelgildea/todo", newTodo)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))
})


