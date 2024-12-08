import { Route, Routes } from "react-router-dom";
import TodoList from "./component/TodoList";
import TodoDatail from "./component/TodoDetail";
import Layout from "./component/Layout";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<TodoList />} />
        <Route path="/blog/:id" element={<TodoDatail />} />
      </Route>
    </Routes>
  );
}

export default App;
