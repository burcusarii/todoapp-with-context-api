import React from "react";
import { useTodo } from "../../../Context/ToDoContext";

function Item({ todo }) {
  const { toggleToDo, delToDo } = useTodo();

  const onChangeTodo = (id) => toggleToDo(id);
  const onDelete = (id) => delToDo(id);

  return (
    <div>
      <li className={todo.completed ? "completed" : ""}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={todo.completed}
            onChange={() => onChangeTodo(todo.id)}
          />
          <label>{todo.text}</label>
          <button
            className="destroy"
            onClick={() => onDelete(todo.id)}
          ></button>
        </div>
      </li>
    </div>
  );
}

export default Item;
