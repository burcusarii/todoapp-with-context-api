import React from "react";
import Item from "./Item";
import { useTodo } from "../../../Context/ToDoContext";

function List() {
  const { todos, filter } = useTodo();
  let filtered_todos = todos;

  if (filter !== "all") {
    filtered_todos = todos.filter((todo) =>
      filter === "active" ? todo.completed === false : todo.completed === true
    );
  }

  return (
    <ul className="todo-list">
      {filtered_todos.map((todo) => (
        <Item todo={todo} key={todo.id}></Item>
      ))}
    </ul>
  );
}

export default List;
