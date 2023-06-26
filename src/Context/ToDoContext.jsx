import React, { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ToDoContext = createContext();
const firstTodos = JSON.parse(localStorage.getItem("todos"))
  ? JSON.parse(localStorage.getItem("todos"))
  : [];
export const ToDoProvider = ({ children }) => {
  // State Tanımlamaları
  const [todos, setTodos] = useState(firstTodos);
  const [filter, setFilter] = useState("all");
  const [allCheck, setAllCheck] = useState(false);

  //yeni todo ekleme fonksiyonu
  const addToDo = (text) => {
    setTodos((prev) => [...prev, { id: uuidv4(), completed: false, text }]);
  };

  // todos güncellendiğinde localstorage güncelleme
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // todo checked durumunu güncelleme fonksiyonu
  const toggleToDo = (id) => {
    const cloned_todos = [...todos];

    cloned_todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
    });
    setTodos(cloned_todos);
  };

  // bütün todo'ların aynı anda toggle edilmesi
  const toggleAll = () => {
    const cloned_todos = [...todos];
    cloned_todos.map((todo) => {
      return (todo.completed = !allCheck);
    });
    setAllCheck(!allCheck);
    setTodos(cloned_todos);
  };

  // todo silme
  const delToDo = (id) => {
    const cloned_todos = [...todos];

    const index = cloned_todos.findIndex((todo) => todo.id === id);
    cloned_todos.splice(index, 1);

    setTodos(cloned_todos);
  };

  // bütün todo'ları silme
  const clearAllTodos = () => {
    const notCompletedTodos = todos.filter((todo) => todo.completed === false);

    setTodos(notCompletedTodos);
  };

  // componentlerde kullanılacak value'ların bulunduğu obje.
  const values = {
    todos,
    setTodos,
    addToDo,
    toggleToDo,
    delToDo,
    clearAllTodos,
    filter,
    setFilter,
    toggleAll,
  };
  return <ToDoContext.Provider value={values}>{children}</ToDoContext.Provider>;
};

// diğer componentlerde sürekli useContext kullanmamak için yazılmış custom hook.
export const useTodo = () => {
  const context = useContext(ToDoContext);

  if (context === undefined) {
    throw new Error("useTodo Hook must be called with Provider");
  } else {
    return context;
  }
};
