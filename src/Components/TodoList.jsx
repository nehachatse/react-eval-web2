import styles from "./TodoList.module.css";

const styleItem = (status) => {
  if (status) {
    return {
      color: "green",
      textDecoration: "line-through"
    };
  }
};

const styleBtn = (status) => {
  if (status) {
    return {
      color: "green",
      border: "5px solid green"
    };
  } else {
    return {
      color: "orange",
      border: "5px solid orange"
    };
  }
};

export default function TodoList({ data, handleToggle, handleDelete }) {
  const compItem = (status) => styleItem(status);
  const compBtn = (status) => styleBtn(status);

  return (
    <>
      {data.map((item) => (
        <div className={styles.list}>
          <span style={compItem(item.status)}>{item.title}</span>
          <div className={styles.btn_div}>
            <button
              style={compBtn(item.status)}
              onClick={() => handleToggle(item.id)}
            >
              ✓
            </button>
            <button
              onClick={() => handleDelete(item.id)}
              className={styles.cancel}
            >
              X
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
