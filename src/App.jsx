import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: "Belajar React.js", completed: false },
    { id: 2, task: "Membuat proyek kecil", completed: true },
    { id: 3, task: "Meninjau kode sebelumnya", completed: false },
  ]);

  return (
    <div className="max-w-md m-auto py-10 relative h-screen">
      <div className="flex justify-between pb-2 border-b border-gray-300 font-medium text-xl">
        <h1>Todo List</h1>
        <p>&#8942;</p>
      </div>

      <div>
        <ul className="list-none my-6">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="bg-slate-100 p-4 mb-4 rounded-md"
              // style={{
              //   textDecoration: todo.completed ? "line-through" : "none",
              //   marginBottom: "10px",
              // }}
            >
              {todo.task}
            </li>
          ))}
        </ul>
      </div>

      <button className="absolute bottom-4 right-4 bg-blue-500 text-white text-2xl w-12 h-12 rounded-full flex items-center justify-center shadow-md hover:bg-blue-600">
        &#43;
      </button>
    </div>
  );
}

export default App;
