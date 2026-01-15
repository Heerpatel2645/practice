import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [countToSet, setCountToSet] = useState(0);

  return (
    <>
      <h1>Counter is {count}</h1>
      <div>Count is {count}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount((count) => Math.max(count - 1, 0))}>
          Decrease
        </button>
        <button onClick={() => setCount((count) => 0)}>Reset</button>
      </div>
      <div>
        <input
          value={countToSet}
          onChange={(e) => setCountToSet(Number(e.target.value))}
          type="text"
        />
        <button
          onClick={() => {
            setCount(Number(countToSet));
            setCountToSet(0);
          }}
        >
          Set to {countToSet}
        </button>
      </div>
    </>
  );
}
