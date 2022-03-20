const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-input");
let todoList = document.querySelector(".todo-items");
const todoDelBtn = document.querySelector(".all-delete-btn1");
const doneDelBtn = document.querySelector(".all-delete-btn2");
const todoList2 = document.querySelector(".todo-items2");

//서브밋제어
function handleSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  paintTodo(newTodo);
}

// 투두 그리기
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

//투두 리스트 지우기
function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
}

// 완료된 투두 옮기기
function moveTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  const todoListDone = document.querySelector(".todo-items2");
  todoListDone.appendChild(li);
  li.className += " done";
}

// 오늘 날짜 구하기
function getToday() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const date = today.getDate();
  const toDay = document.querySelector(".today");
  toDay.innerText = `📆 ${year}년 ${month + 1}월 ${date}일`;
}

todoForm.addEventListener("submit", handleSubmit);
todoDelBtn.addEventListener("click", () => (todoList.innerHTML = ""));
doneDelBtn.addEventListener("click", () => (todoList2.innerHTML = ""));
getToday();
