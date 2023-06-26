import React from "react";
import { useTodo } from "../../Context/ToDoContext";

function Footer() {
  const { todos, clearAllTodos, filter, setFilter } = useTodo();

  const clearCompletedTodos = () => clearAllTodos();

  const activeTodos = todos.filter((todo) => todo.completed === false);
  return (
    <div>
      <footer className="footer">
        <span className="todo-count">
          <strong>{activeTodos.length} </strong>
          item{activeTodos.length > 1 ? "s" : ""} left
        </span>

        <ul className="filters">
          <li>
            <a
              href="#/"
              onClick={() => setFilter("all")}
              className={filter === "all" ? "selected" : ""}
            >
              All
            </a>
          </li>
          <li>
            <a
              href="#/"
              onClick={() => setFilter("active")}
              className={filter === "active" ? "selected" : ""}
            >
              Active
            </a>
          </li>
          <li>
            <a
              href="#/"
              onClick={() => setFilter("completed")}
              className={filter === "completed" ? "selected" : ""}
            >
              Completed
            </a>
          </li>
        </ul>

        <button
          className="clear-completed"
          onClick={() => clearCompletedTodos()}
        >
          Clear completed
        </button>
      </footer>
    </div>
  );
}

export default Footer;
