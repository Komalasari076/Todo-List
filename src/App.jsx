import { useContext, useState } from "react";
import { TodoContext } from "./context/TodoContext";

function App() {
  const { todos } = useContext(TodoContext);
  const [active, setActive] = useState("folder");

  return (
    <div className="max-w-md m-auto p-4 relative h-screen">
      <div className="flex justify-between pb-2 border-b border-gray-300 font-medium text-xl">
        <h1>Todo List</h1>
        <p>&#8942;</p>
      </div>

      <div className="flex items-center mb-4 font-medium">
        <button
          className={`w-1/2 text-center p-2 ${
            active === "folder"
              ? "border-b border-slate-500 bg-slate-50"
              : "border-b border-gray-300"
          }`}
          onClick={() => setActive("folder")}
        >
          Folder
        </button>

        <button
          className={`w-1/2 text-center p-2 ${
            active === "file"
              ? "border-b border-slate-500 bg-slate-50"
              : "border-b border-gray-300"
          }`}
          onClick={() => setActive("file")}
        >
          File
        </button>
      </div>

      <div>
        {active === "folder" && (
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
                {todo.category}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        {active === "file" && (
          <ul className="list-none my-6">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="bg-slate-200 p-4 mb-4 rounded-md"
                // style={{
                //   textDecoration: todo.completed ? "line-through" : "none",
                //   marginBottom: "10px",
                // }}
              >
                {todo.category}
              </li>
            ))}
          </ul>
        )}
      </div>

      <button className="absolute bottom-4 right-4 bg-blue-500 text-white text-2xl w-12 h-12 rounded-full flex items-center justify-center shadow-md hover:bg-blue-600">
        &#43;
      </button>
    </div>
  );
}

export default App;
