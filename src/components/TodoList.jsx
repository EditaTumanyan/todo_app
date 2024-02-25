import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";
import { useEffect, useMemo, useState } from "react";
export default function TodoList({ todos, setTodos }) {
  const [sortedTodos, setSortedTodos] = useState([]);
  useEffect(() => {
    setSortedTodos(
      todos.slice().sort((a, b) => Number(a.done) - Number(b.done))
    );
  }, [todos]);

  return (
    <div className={styles.list}>
      {sortedTodos.map((item) => (
        <TodoItem
          key={item.name}
          item={item}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
