### useState

useState는 배열을 반환

- 배열의 첫 번째 요소는 `상태 값 저장 변수`(state)
- 두 번째 요소는 `상태 값 갱신 함수`(setState)

```js
const [state, setState] = useState;
```

`setState`는 컴포넌트를 리렌더링 시키는 역할
(`state`를 변경시키는게 아님)

`state`를 지정해주는 방법은 두 가지

1.  ```js
    setState(5);
    ```

2.  `````js
        setState((count) => count + 1);
        ````
    > 두 번째 방법이 더 안전하게 현재 값을 보장해 주는 방법이다
    `````

setState 함수는 **자신과 함께 반환된 변수를 변경시키는게 아니라**, 다음 useState가 반환할 값을 변경시키고, 컴포넌트를 리렌더링 시키는 역할을 한다. **변경된 값은 useState가 가져온다.**
