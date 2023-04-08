export default function Counter(props: { count: number }) {
  return (
    <div className="border-solid p-5 border-4 border-blue-600 rounded">
      <h1 className="text-3xl font-bold">Counter: {props.count}</h1>
      <p className="text-xl">Re-render {(Math.random() * 100).toFixed(0)}</p>
    </div>
  );
}
