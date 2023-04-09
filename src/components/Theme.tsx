import { memo } from "react";

function Theme(props: { theme: string }) {
  return (
    <div className="mt-6 border-solid p-5 border-4 border-red-600 rounded">
      <h1 className="text-3xl font-bold">Theme: {props.theme}</h1>
      <p className="text-xl">Re-render {(Math.random() * 100).toFixed(0)}</p>
    </div>
  );
}

export default memo(Theme);
