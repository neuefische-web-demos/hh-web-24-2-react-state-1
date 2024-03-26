import { useState } from "react";
import "./styles.css";

function App2() {
  return (
    <>
      <CounterLocal />
      <CounterLocal />
      <CounterLocal />
      <CounterLocal />
    </>
  );
}

// how can we trigger a "rerender" of Counter?
function CounterLocal() {
  const [count, setCount] = useState(42);
  // setCount does two things:
  // 1. sets the value of count
  // 2. triggers a rerender of "Counter"

  return (
    <button
      onClick={() => {
        setCount(count + 10);
      }}
    >
      You have clicked this button {count} times
    </button>
  );
}

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Counter value={count} increment={() => setCount(count + 1)} />
      <Counter value={count} increment={() => setCount(count + 1)} />
      <Counter value={count} increment={() => setCount(count + 1)} />
      <Counter value={count} increment={() => setCount(count + 1)} />
    </>
  );
}

function Counter({ value, increment }) {
  return (
    <button onClick={increment}>
      You have clicked this button {value} times
    </button>
  );
}
