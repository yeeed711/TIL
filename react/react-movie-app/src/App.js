import { useState, useEffect } from "react";

function App() {
  const [amount, setAmount] = useState(0);
  const [inverted, setInverted] = useState(false);
  const onChange = (event) => setAmount(event.target.value);
  const reset = () => setAmount("");
  const onFlip = () => {
    setInverted((current) => !current);
    reset();
  };
  return (
    <div>
      <h1>Super Converter</h1>
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
      <button onClick={onFlip}>Flip</button>
    </div>
  );
}

export default App;
