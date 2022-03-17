const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("input");
const todoList = document.getElementById("todo-list");

let toDos = [];

function handleSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newObj);
  paintTodo(newObj);
  saveTodo();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "지움";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function saveTodo() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveTodo();
}

todoForm.addEventListener("submit", handleSubmit);

const savedTodo = localStorage.getItem("todos");
if (savedTodo !== null) {
  const parsedToDos = JSON.parse(savedTodo);
  toDos = savedTodo;
  parsedToDos.forEach(paintTodo);
}
