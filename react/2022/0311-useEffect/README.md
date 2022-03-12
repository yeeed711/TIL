useEffect
===

**useEffect는 두개의 argument를 가지는 function이다.**
- `첫 번째 argument`는 딱 한번만 실행하고 싶은 코드
- `두 번째 argument`는  배열을 넣어준다(`dependency` 지켜보려는 것)
- `dependency`가 존재하면, 해당 리스트의 값이 변화 할 때만 실행된다.
- 대표적인 사용 법 -> `API`를 딱 한번만 호출하고 그 뒤로는 호출하기 싫은 경우

`react.js`는 `component`를 새로고침한다.
우리가 새로고침 하지 않아도 새로운 데이터가 들어 올 때 마다 UI를 새로고침 (다만 변화가 일어날 때만 새로고침한다.)

>가끔 `component`안에 딱 한번만 실행하고 싶은 코드가 있다면?
>
>1. 특정 데이터가 변화할 때 실행
>2. 시작시에 한 번만 실행

```js
uesEffect(() => {
    console.log(“I run only once.”);
}, []);

>>처음 렌더링시에 딱 한 번만 실행하고 다시는 하지말기

```
```js
uesEffect(() => {
    console.log(“I run when ‘’keyword’ changes.”);
}, [keyword]);

>>시작할 때와, keyword 변화시에 실행해라

```
```js
uesEffect(() => {
    console.log(“I run when ‘counter’ changes.”);
}, [counter]);

>>시작할 때와, counter 변화시에 실행해라

```
```js
uesEffect(() => {
    console.log(“I run when keyword & counter change”);
}, [keyword, counter]);

>> 시작할 때와 keyword, counter 둘 중 하나가 변화시에 실행하라
```
