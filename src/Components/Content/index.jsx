import React from "react";
import Footer from "./Footer";
import List from "./List";
import { useTodo } from "../../Context/ToDoContext";
function Content() {
  const { toggleAll } = useTodo();

  const checkedAll = () => {
    toggleAll();
  };

  return (
    <>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all" onClick={() => checkedAll()}>
          Mark all as complete
        </label>

        <List></List>
      </section>
      <Footer></Footer>
    </>
  );
}

export default Content;
