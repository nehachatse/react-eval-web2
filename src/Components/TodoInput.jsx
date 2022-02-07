import React from "react";
import styles from "./TodoInput.module.css";

export default function TodoInput({ onAdd }) {
  const [value, setValue] = React.useState("");

  const onSubmit = () => {
    onAdd(value);
    setValue("");
  };
  return (
    <div className={styles.cont}>
      <input
        type="text"
        placeholder="Enter todo item"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={onSubmit}>+</button>
    </div>
  );
}
