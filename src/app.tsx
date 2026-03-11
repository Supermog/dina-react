import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1>Vite + React</h1>
        <div className="flex flex-col items-center justify-center gap-2">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
      </div>
    </div>
  );
}

export { App };
