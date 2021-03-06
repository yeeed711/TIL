import { useState, useEffect } from "react";

function MinutesToHours() {
  const [amount, setAmount] = useState(0);
  const [inverted, setInverted] = useState(false);
  const onChange = (event) => setAmount(event.target.value);
  const reset = () => setAmount("");
  const onInvert = () => {
    setInverted((current) => !current);
    reset();
  };
  return (
    <div>
      <div>
        <label htmlFor="minutes">Minutes : </label>
        <input
          value={inverted ? amount * 60 : amount}
          onChange={onChange}
          id="minutes"
          type={"number"}
          placeholder="Minutes"
          disabled={inverted}
        />
      </div>
      <div>
        <label htmlFor="hours">Hours : </label>
        <input
          value={inverted ? amount : Math.round(amount / 60)}
          onChange={onChange}
          id="hours"
          type={"number"}
          placeholder="Hours"
          disabled={!inverted}
        />
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={onInvert}>Flip</button>
    </div>
  );
}
function KmToMiles() {
  const [state, setState] = useState("");
  const [inverted, setInverted] = useState(false);
  const onChange = (event) => setState(event.target.value);
  const reset = () => setState("");
  const onInvert = () => {
    setInverted((current) => !current);
    reset();
  };
  return (
    <div>
      <div>
        <label htmlFor="km">KM : </label>
        <input
          value={inverted ? state / 0.621371 : state}
          onChange={onChange}
          id="km"
          type={"number"}
          placeholder="Km"
          disabled={inverted}
        />
      </div>
      <div>
        <label htmlFor="miles">Miles : </label>
        <input
          value={inverted ? state : state * 0.621371}
          onChange={onChange}
          id="miles"
          type={"number"}
          placeholder="Miles"
          disabled={!inverted}
        />
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={onInvert}>Invert</button>
    </div>
  );
}

function App() {
  const [index, setIndex] = useState("xx");
  const onSelect = (event) => setIndex(event.target.value);
  return (
    <div>
      <h1>Super Converter</h1>
      <select value={index} onChange={onSelect}>
        <option value={"xx"}>???????????? ??????????????????</option>
        <option value={"0"}>Minutes & Hours</option>
        <option value={"1"}>Km & Miles</option>
      </select>
      <hr />
      {index === "xx" ? "???????????? ?????????????????? !" : null}
      {index === "0" ? <MinutesToHours /> : null}
      {index === "1" ? <KmToMiles /> : null}
    </div>
  );
}

export default App;
