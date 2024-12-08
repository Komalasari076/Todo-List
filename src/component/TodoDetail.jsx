import { useContext } from "react";
import { useParams } from "react-router-dom";
import { TodoContext } from "../context/TodoContext";

function TodoDatail() {
  const { id } = useParams();
  const { todos } = useContext(TodoContext);
  const todo = todos.find((todo) => todo.id === parseInt(id));

  if (!todo) {
    return <h1>Todo not found</h1>;
  }

  return (
    <>
      <h1>{todo.category}</h1>
      {todo.subcategories.map((todo, index) => (
        <div key={index}>
          <h1>{todo.subcategory}</h1>
        </div>
      ))}
    </>
  );
}

export default TodoDatail;
