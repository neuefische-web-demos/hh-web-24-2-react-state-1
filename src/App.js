import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </>
  );
}

// how can we trigger a "rerender" of Counter?
function Counter() {
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
