const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const TODOS_KYE = "todos"; // 특정 단어를 두번 이상 사용한다면 변수로 저장

let toDos = []; // 입력한 투투값을 저장하기위해 빈 배열 생성
//새로고침시 지난 값들도 저장하고싶기 때문에 const->let 로 변경

function saveToDos() {
  localStorage.setItem(TODOS_KYE, JSON.stringify(toDos)); // 로컬스토리지를 이용해 웹페이지가 새로고침되더라도 값을 저장할 수 있도록 한다.
} //JSON.stringify 매서드를 이용하면 배열형태로 된 문자열로 저장할 수 있다.
// 로컬스토리지는 string format만 지원가능하다.

function deleteToDo(event) {
  const li = event.target.parentElement; // 콘솔로 이벤트 발생하는 부분이 어딘지 찾기
  li.remove(); //지워주기만 하면 끝
}

function paintToDo(newTodo) {
  const li = document.createElement("li"); //투두 값을 추가할 때마다 리스트로 표현 할 것이기 때문에 리스트 태그를 생성
  const span = document.createElement("span"); //span태그안에 투두 값을 저장하기 위해 생성, 추후 삭제버튼 또한 추가해야한다. 이 모든건 li태그안에 있어야하므로 따로따로 생성할 것.
  span.innerText = newTodo; //span에 newTodo를 추가한다. newTodo는 인풋에 저장되는 값.
  const button = document.createElement("button"); //삭제 버튼을 생성한다
  button.innerText = "✖️";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span); //appendChild는 객체를 추가해주는 기능 한 번에 오직 하나의 노드만 추가가능하다.
  li.appendChild(button); //순서대로 추가해주기 위함.
  toDoList.appendChild(li); //리스트에 만들어준 li를 추가한다.
}

function handleToDoSubmit(event) {
  event.preventDefault(); //서브밋이벤트를 설정함으로 자동새로고침 중단
  const newTodo = toDoInput.value; //투두값을 저장
  toDoInput.value = ""; //저장 후에 비움
  toDos.push(newTodo); // paintToDo 를 그리기전에 만들어둔 빈 배열에 뉴투두를 추가한다.
  paintToDo(newTodo); //투두값을 표현해줄 함수를 실행 시키면서 그 함수의 인자로 저장한 투두값을 전달
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KYE); //로컬스토리지에서 가져온 스트링으로 변환한 문자

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
