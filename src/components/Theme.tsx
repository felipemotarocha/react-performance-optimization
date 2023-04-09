import { memo } from "react";

function Theme(props: { theme: string; toggleTheme: () => void }) {
  return (
    <div className="mt-6 border-solid p-5 border-4 border-red-600 rounded">
      <h1 className="text-3xl font-bold">Theme: {props.theme}</h1>
      <p className="text-xl">Re-render {(Math.random() * 100).toFixed(0)}</p>

      <button onClick={props.toggleTheme} className="mt-6 bg-red-600 text-white rounded p-4">
        Toggle Theme
      </button>
    </div>
  );
}

export default memo(Theme);
