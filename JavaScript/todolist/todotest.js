const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-items");

function handleSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  paintTodo(newTodo);
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.className = "todo-item";
  const checkBtn = document.createElement("button");
  checkBtn.className = "todo-check-btn";
  checkBtn.innerText = "✔️";
  checkBtn.addEventListener("click", moveTodo);
  const span = document.createElement("span");
  span.className = "todo-item-text";
  span.innerText = newTodo;
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "❌";
  deleteBtn.className = "todo-delete-btn";
  deleteBtn.addEventListener("click", deleteTodo);
  li.appendChild(checkBtn);
  li.appendChild(span);
  li.appendChild(deleteBtn);
  todoList.appendChild(li);
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function moveTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  const todoListDone = document.querySelector(".todo-items2");
  todoListDone.appendChild(li);
  //스팬에 클래스네임 추가해야함...
}

todoForm.addEventListener("submit", handleSubmit);
