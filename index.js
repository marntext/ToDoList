const todoList = [];
const todoListElement = document.querySelector("#myUL");

document.querySelector("#todo_button").addEventListener("click", addTodo)
function addTodo() {
    const todoText = document.querySelector("#myInput").value;
    console.log(todoText);
}
