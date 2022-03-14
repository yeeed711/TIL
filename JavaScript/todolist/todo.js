const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo) {
  const li = document.createElement("li"); //투두 값을 추가할 때마다 리스트로 표현 할 것이기 때문에 리스트 태그를 생성
  const span = document.createElement("span"); //span태그안에 투두 값을 저장하기 위해 생성, 추후 삭제버튼 또한 추가해야한다. 이 모든건 li태그안에 있어야하므로 따로따로 생성할 것.
  li.appendChild(span); //appendChild는 객체를 추가해주는 기능 한 번에 오직 하나의 노드만 추가가능하다.
  span.innerText = newTodo; //span에 newTodo를 추가한다. newTodo는 인풋에 저장되는 값.
  toDoList.appendChild(li); //리스트에 만들어준 li를 추가한다.
}

function handleToDoSubmit(event) {
  event.preventDefault(); //서브밋이벤트를 설정함으로 자동새로고침 중단
  const newTodo = toDoInput.value; //투두값을 저장
  toDoInput.value = ""; //저장 후에 비움
  paintToDo(newTodo); //투두값을 표현해줄 함수를 실행 시키면서 그 함수의 인자로 저장한 투두값을 전달
}

toDoForm.addEventListener("submit", handleToDoSubmit);
