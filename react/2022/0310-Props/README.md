Props
===

>**`Props`는 오브젝트이며 컴포넌트의 첫 번째이자 유일한 인자로 주어진다.**

리액트에서 스타일 속성을 이용해 버튼 디자인을 할 때
수정해야하는 버튼이 수 십개라면?<br>
--> 버튼을 컴포넌트 형태로 만들자 !

- 모든 컴포넌트를 `function Btn()` 괄호 속에 인자를 받고 인자는 `props`를 받는다
- `Props`는 오브젝트이며 컴포넌트의 첫번째이자 유일한 인자로 주어진다.
- `Props`에는 내가 원하는 이름의 객체를 지정할 수 있고, 또한 삼항연산자의 인수로도 사용가능하다.
- 오브젝트안에 객체를 지정해주기 위해선 중괄호로 감싸주어야한다.

```js
function Btn({ text, big }) {
      return (
        <button
          style={{
            backgroundColor: "tomato",
            color: "white",
            padding: "10px 20px",
            border: 0,
            borderRadius: 10,
            fontSize: big ? 18 : 16,
          }}
        >
          {text}
        </button>
      );
    }
    function App() {
      return (
        <div>
          <Btn text="Save Changes" big={true} />
          <Btn text="Continue" big={false} />
        </div>
      );
    }
```

* **Prop Types**
`propType.(타입종류)`를 설정하면 원하는 값만 받게 해준다.<br>
이를 사용하기 위해서는 스크립트태그를 따로 추가해야한다.
  * text = propType.string --> 문자열만 받게해줌
  * fontSize = propType.number --> 숫자값만 받게해줌
  * `isRequirde` 필수조건으로 만들어줌
>동일한 `props`를 공유하는 컴포넌트 함수중에 객체를 지정해주지 않았을 경우, 정의되지 않은 변수에 관한 기본값을 정할 수 있다.
