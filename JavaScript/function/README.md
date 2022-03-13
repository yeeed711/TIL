# Function
프로그램을 구성하는 기본적인 빌딩블록

## 1. 함수의 정의
  - function name(param1, param2) (body... return;)
  - 하나의 함수는 하나의 기능을 담담한다.
  - 함수의 이름은 doSomething, command, verb 동사의 형태로 지어준다.
  ```js
  function log(message) {
      console.log(message);
  }

  log("hello world!");
  log(1234);
  ```
***

### 1-2. Parameters
  - object의 파라미터는 reference를 불러온다.
  - primitive 파라미터는 value값을 불러온다.

```js
function changeName(obj){
    obj.name = "giriboy"
}

const yeji = { name: "yeji" };

changeName(yeji);
/// { name: 'giriboy' }
```
***
### 1-3. Default parameters (added in ES6)
   - 파라미터에 기본적으로 값을 정의해 줄 수 있다.
   - 값이 전달 되지 않는 경우에도 미리 지정해 둘 수 있다.
```js
function showMessage(message, from = "unknown") {
    console.log(`${message} by ${from}`);
}
showMessage("hello!");
```
`showMessage` 파라미터에 값을 넣어 주지 않았으므로
```js
'hello! by unknown'
```
`unknown`값이 출력된다.
***
### 1-4. Rest parameters (added in ES6)
  - 연산자(...)를 사용하여 함수의 파라미터를 작성한 형태
  - 배열로 전달 받을 수 있다.
  - 사용방법은 파라미터 앞에 (...)을 붙인다.
  - 주의할 점은 항상 제일 마지막 파라미터로 와야한다.
```js
function printAll(...args) {
    for (i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}
printAll('coding', 'yeji')
```
```js
function printAll(...args) {
    for (const arg of args) {
        console.log(arg);
    }
}
printAll('coding', 'yeji')
```
```js
args.forEach((arg) => console.log(arg));
printAll('coding', 'yeji')
```
>출력 결과
>```js
>'coding'
>'yeji'
>```
***
### 1-5. 스코프
- 블럭 안에서 정의한 변수는 블럭 안에서만 참조가능하며 이를 지역변수라고 한다.
- 블럭 바깥쪽에서 선언한 변수는 전역변수로 어디에서나 참조가 가능하다.
```js
let globalMessage = "global;"  // global variable

function printMessage() {
    let message = "hello";
    console.log(message);  // local variable
    console.log(globalMessage);
}

printMessage();
console.lof(message); //ReferenceError: message is not defined
```
***
### 1-6. Return a value
- 함수에서 파라미터로 전달 받은 값을 계산해서 리턴한다.
```js
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2); // 3
```
***
### 1-7. Early return, early exit
- 함수를 실행할 때 조건이 맞지 않으면 빨리 종료하고 나오는 것이 좋다.
- 불필요한 계산을 막기 위함 (조건이 맞지 않는경우, 값이 -1 또는 undefined 경우)
```js
// bad
function upgradeUser(user) {
    if (user.point > 10){
        // long upgrade logic...
    }
}

// good
function upgradeUser(user) {
    if (user.point > 10){
        return
    }
    // long upgrade logic...
}
```
***
## 2. Function expression (함수 표현식)
- `function` 표현식 내에서 함수를 정의할 수 있다.
- `function declaration`은 지정된 매개변수를 갖는 함수를 정의한다.
    - `함수 선언식`이라고도 하며 호이스팅이 가능하다.
- 주의할 점은 `함수 표현식`은 정의하기 전에는 참조가 불가능하며 호이스팅 또한 불가능하다. 
```js
const print = function () {
    console.log("print");
};
print();
```
이는 `화살표 함수`로 함축 가능하다.
```js
const print = () => console.log("print");
```
***
### 2-1. 콜백
- 함수의 파라미터를 다른 함수로 전달할 때 파라미터로 전달된 함수를 콜백함수라고 한다.
```js
function randomQuiz(answer, printYes, printNo) {
    if (answer === "love you") {
        printYes();    
    } else {
        printNo();
    }
}

// anonymous function
const printYes = function () {
    console.log("yes");
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
    console.log("No");
}

randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);
```
***
### 2.2 Arrow function (화살표 함수)
- 항상 이름이 없는 함수.
- 호이스팅이 불가능하다.
>예제1)
```js
const simplePrint = function() {
    console.log("simplePrint ! ");
};
```
```js
const simplePrint = () => console.log("simplePrint ! ");
};
```
>예제2
```js
const add = function(a, b) {
    return a + b
};
```
```js
const add = (a, b) => a + b;
```
>예제3
```js
const simpleMultiply = (a, b) => {
    // do something more
    return a * b;
};

// 화살표함수는 한 줄로 표현되면 블럭을 제외할 수 있는 반면
// 여러가지 로직을 더 추가 해야할 경우에는 블럭을 사용한다.
// 블럭을 사용하면 return 값을 넣어주어야한다.
```
***
### 2-3. IIFE (Immediately Invoked Function Expression) 즉시호출함수
```js
function hello() {
    console.log("IIFE");
}
```
함수를 바로 실행하고 싶을 때 함수 전체를 ()소괄호로 묶어주면 바로 실행시킬 수 있다. 
