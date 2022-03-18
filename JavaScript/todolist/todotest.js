const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todo-input");
const listItems = document.querySelector(".list-items");
let toDos = [];
const TODOS_KEY = "todos";

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
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  span.className = "list-item";
  const button = document.createElement("button");
  button.addEventListener("click", deleteTodo);
  button.innerText = "Del";
  button.className = "btn";

  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
  saveTodo();
}

function deleteTodo(e) {
  const li = e.target.parentElement;
  li.remove();
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));

  saveTodo();
}

function saveTodo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

todoForm.addEventListener("submit", handleSubmit);

const savedTodo = localStorage.getItem(TODOS_KEY);
if (savedTodo !== null) {
  const savedArr = JSON.parse(savedTodo);
  toDos = savedArr;
  savedArr.forEach(paintTodo);
}
