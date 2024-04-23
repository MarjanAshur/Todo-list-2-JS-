let inp = document.querySelector("input")
let btnAdd = document.querySelector("#add")
let ul = document.querySelector("ul")


let todos = []

window.addEventListener("load", () => {
    if(sessionStorage.getItem("todos") != null){
        todos = JSON.parse(sessionStorage.getItem("todos"))
    }
    addTodo()
})


function addSession(){
    if(todos.length != 0){

        sessionStorage.setItem("todos", JSON.stringify(todos))
    }
}

function addTodoArr (){
    if(!todos.includes(inp.value.trim()) && inp.value.trim().length != 0){

        todos.push(inp.value.trim())
       
    }
}

function addTodo() {
    ul.innerHTML = ""
    addTodoArr()
    addSession()
    if (todos.length != 0) {
        console.log(todos);
        todos.forEach((e,index) => {
            ul.innerHTML += `<li>${e} <button onclick='editTodo(${index})'> edit</button> <button onclick= 'deleteTodo(${index})' >X</button></li>`
        })
    }
    inp.value = "" 
    console.log(todos);
}   

function deleteTodo(index){
todos.splice(index,1)
sessionStorage.removeItem('todos')
addTodo()
}

function editTodo(index){
    let ad = prompt('deyeri deyisin',todos[index])


todos[index] = ad


addTodo()
}






btnAdd.addEventListener("click", () => {
    if(inp.value.trim().length != 0){
        addTodo()

    }
})

window.addEventListener("keydown", (e) => {
    if (e.code == "Enter") {
        if(inp.value.trim().length != 0){
            addTodo()
    
        }
    }
})
