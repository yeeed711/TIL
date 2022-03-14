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
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // filter 함수는 기존 배열중 트루값에 해당하는 값을 제외한 후 다시 새 배열로 만든다. 그러므로 이 필터를 사용할 땐 배열에 사용한다
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li"); //투두 값을 추가할 때마다 리스트로 표현 할 것이기 때문에 리스트 태그를 생성
  li.id = newTodo.id; // 리스트에 고유값을 주기위해서 아이디를 추가해준다
  const span = document.createElement("span"); //span태그안에 투두 값을 저장하기 위해 생성, 추후 삭제버튼 또한 추가해야한다. 이 모든건 li태그안에 있어야하므로 따로따로 생성할 것.
  span.innerText = newTodo.text; // 기존 뉴투두로만 작성하면 화면에 오브젝트,오브젝트로 출력되므로 오브젝트안의 값인 text를 추가해주자
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
  const newToDoObj = {
    // 기존에 하나의 텍스트형태로만 저장하던 것을 오브젝트형태로 바꿈 그래야 로컬스토리지안에서 데이터를 지울 때 무엇을 지울 수 있는지 찾을 수 있다.
    text: newTodo,
    id: Date.now(), // 여기서는 id값으로 찾을것. 리스트마다 랜덤값을 얻기위해 Date.new 내장함수를 사용한다.
  };
  toDos.push(newToDoObj); // 오브젝트 형태로 바꾼 투두값을 배열에 푸시한다.
  paintToDo(newToDoObj); // 투두값을 오브젝트 형태로 받았기에 전달도 오브젝트로 변경해준다.
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KYE); //로컬스토리지에서 가져온 스트링으로 변환한 문자

if (savedToDos !== null) {
  // 만약 로컬스토리지가 빈 값이 아니라면 실행될 로직
  const parsedToDos = JSON.parse(savedToDos); // JSON.stringify로 변환된 문자열을 array형태로 반환해주는 매서드(parse)
  toDos = parsedToDos; //새로고침시 toDos는 빈 배열로 시작한다. 기존의 내용을 기억할 수 있도록 리스트를 동기화해준다
  parsedToDos.forEach(paintToDo); //forEach라는 내장함수를 사용해 괄호속 인자를 한번씩 돌면서 함수를 실행한다. *함수자체가 여러번 실행되는 것이 아님
}
