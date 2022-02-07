import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import styles from "./Todo.module.css";

export default function Todo() {
  const [todo, setTodo] = React.useState([]);
  const [showComp, setComp] = React.useState(true);

  const onAdd = (item) => {
    const payload = {
      id: todo.length + 1,
      title: item,
      status: false
    };
    setTodo([...todo, payload]);
  };

  const handleToggle = (id) => {
    const updatedTodo = todo.map((item) =>
      item.id === id ? { ...item, status: !item.status } : item
    );
    setTodo(updatedTodo);
  };
  const handleDelete = (id) => {
    const updatedTodo = todo.filter((item) => item.id !== id);
    setTodo(updatedTodo);
  };
  return (
    <div>
      <TodoInput onAdd={onAdd} />
      <TodoList
        data={todo.filter((item) => !item.status)}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
      />

      <button onClick={() => setComp(!showComp)} className={styles.btn}>
        {showComp ? "HIDE COMPLETED" : "SHOW COMPLETED"}
      </button>

      {showComp && (
        <TodoList
          data={todo.filter((item) => item.status)}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
}
