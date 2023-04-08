import { useState } from "react";
import Counter from "./components/Counter";
import Theme from "./components/Theme";

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const increaseCount = () => setCount((prev) => prev + 1);

  return (
    <div>
      <Counter count={count} />

      <Theme theme={theme} />

      <div className="flex gap-6">
        <button onClick={toggleTheme} className="mt-6 bg-blue-600 text-white rounded p-4">
          Toggle Theme
        </button>
        <button onClick={increaseCount} className="mt-6 bg-red-600 text-white rounded p-4">
          Increase Count
        </button>
      </div>
    </div>
  );
}

export default App;
