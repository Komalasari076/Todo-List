import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { useNavigate } from "react-router-dom";

function TodoList() {
  const { todos } = useContext(TodoContext);
  const navigate = useNavigate();

  const TodoClick = (id) => {
    navigate(`/blog/${id}`);
  };

  return (
    <>
      <div>
        <ul className="list-none my-6">
          {todos.map((todo) => (
            <li
              key={todo.id}
              onClick={() => TodoClick(todo.id)}
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
      </div>

      <button className="absolute bottom-4 right-4 bg-blue-500 text-white text-2xl w-12 h-12 rounded-full flex items-center justify-center shadow-md hover:bg-blue-600">
        &#43;
      </button>
    </>
  );
}

export default TodoList;
