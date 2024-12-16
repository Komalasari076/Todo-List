import { useEffect, useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import Robot from "../assets/Robot.png";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [form, setForm] = useState(false);
  const [newTask, setNewTask] = useState("");
  const [editTask, setEditTask] = useState(null);

  useEffect(() => {
    // load data dari local storage
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(todos);
  }, []);

  const saveLocalStrorage = (updateTodos) => {
    localStorage.setItem("todos", JSON.stringify(updateTodos));
  };

  const handleAddTodo = () => {
    if (!newTask.trim()) {
      alert("Task tidak boleh kosong!");
      return;
    }

    const updateTodos = [
      ...todos,
      { id: Date.now(), task: newTask, status: false },
    ];

    setTodos(updateTodos);
    saveLocalStrorage(updateTodos);
    setNewTask("");
    setForm(false);
  };

  const handleToggleStatus = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, status: !todo.status } : todo
    );
    setTodos(updatedTodos);
    saveLocalStrorage(updatedTodos);
  };

  const handleDeleteTodo = (id) => {
    const updateTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updateTodos);
    saveLocalStrorage(updateTodos);
  };

  const handleEditTodo = (id) => {
    const editTodo = todos.find((todo) => todo.id === id);
    setEditTask(editTodo);
    setNewTask(editTodo.task);
    setForm(true);
  };

  const handleUpdateTodo = () => {
    if (!newTask.trim()) {
      alert("Task tidak boleh kosong!");
      return;
    }

    const updateTodos = todos.map((todo) =>
      todo.id === editTask.id ? { ...todo, task: newTask } : todo
    );

    setTodos(updateTodos);
    saveLocalStrorage(updateTodos);
    setNewTask("");
    setEditTask(null);
    setForm(false);
  };

  return (
    <div className="max-w-md min-h-screen m-auto p-6 relative bg-neutral-50">
      <div className="flex justify-between pb-2 border-b border-gray-300 font-medium text-xl">
        <h1>Todo List Harian</h1>
      </div>

      <div>
        <ul className="list-none mt-4 mb-20">
          {todos.length === 0 ? (
            <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
              <div className="flex flex-col items-center">
                <img src={Robot} alt="Robot" className="w-5/6 object-cover" />
                <h1>Belum ada task yang di tambahkan</h1>
              </div>
            </div>
          ) : (
            todos.map((todo) => (
              <li
                key={todo.id}
                className="flex items-center bg-neutral-200 p-4 mb-3 rounded-md"
              >
                <input
                  type="checkbox"
                  className="mr-4"
                  checked={todo.status}
                  onChange={() => handleToggleStatus(todo.id)}
                />
                <span
                  style={{
                    textDecoration: todo.status ? "line-through" : "none",
                    flexGrow: 1,
                  }}
                >
                  {todo.task}
                </span>

                <button
                  onClick={() => handleEditTodo(todo.id)}
                  className="text-blue-500 mr-2"
                >
                  <FaEdit />
                </button>

                <button
                  onClick={() => handleDeleteTodo(todo.id)}
                  className="text-red-500"
                >
                  <FaTrash />
                </button>
              </li>
            ))
          )}
        </ul>
      </div>

      {form && (
        <div className="absolute bottom-8 left-6 bg-neutral-100 shadow-lg p-1 rounded-md w-3/4 border">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="p-2 rounded-md w-full outline-none bg-neutral-100"
            placeholder="Task baru"
          />
        </div>
      )}

      <button
        onClick={() => {
          if (form && editTask) {
            handleUpdateTodo();
          } else if (form) {
            handleAddTodo();
          } else {
            setForm(true);
            setEditTask(null);
            setNewTask("");
          }
        }}
        className="absolute bottom-8 right-6 bg-blue-500 text-white text-2xl w-12 h-12 rounded-full flex items-center justify-center shadow-md hover:bg-blue-600"
      >
        {form ? (
          editTask ? (
            "✓"
          ) : (
            <span className="text-4xl mb-2">&#43;</span>
          )
        ) : (
          <span className="text-4xl mb-2">&#43;</span>
        )}
      </button>
    </div>
  );
}

export default TodoList;
