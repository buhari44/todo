//selectors
const todoInput=document.querySelector(".todo-input")
const todoButton = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todoList");
const filterTodoList = document.querySelector("#filter-todo")


//event listeners
todoButton.addEventListener("click", addtodo);
todoList.addEventListener("click", deleteCheck)

//filterTodoList.addEventListener("click",filterTodo)
 

//functions
function addtodo(event) {
    //prevent event from displaying
    event.preventDefault()
    
    //create div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo")

    //create li
    const newTodo = document.createElement("li")
    newTodo.classList.add("todo-item");
    newTodo.innerHTML = todoInput.value;
    todoDiv.appendChild(newTodo);
//CHECK MARK BUTTON
    const checkButton = document.createElement("button")
    checkButton.innerHTML = '<i class="fas fa-check"></i>'
    checkButton.classList.add("checkbtn")
    todoDiv.appendChild(checkButton)

    //trash button 
    const trashButon = document.createElement("button")
    trashButon.innerHTML='<i class="fas fa-trash"></i>'
     trashButon.classList.add("trashbtn")
    todoDiv.appendChild(trashButon);

    //append to the parent list
    todoList.appendChild(todoDiv)

//clear to do input value
    todoInput.value = "";
    
}

function deleteCheck(e) {
    
    const item = e.target;
    console.log(item.classList)


    if (item.classList[0] === "trashbtn") {
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function () {
            todo.remove()
        })
    }
    if (item.classList[0] === "checkbtn") {
        const todo = item.parentNode;
        todo.classList.toggle("completed")
    }
}
function filterTodo(e){
    const parent = todoList.childNodes
    console.log(parent)
    parent.forEach(function (todo) {
        switch (e.target.value) {
            case "all":
                break;
            case "completed":
                if (todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }
                else {
                    todo.style.display = "flex";
                }

      }
  })
}