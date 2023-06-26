import React from "react";
import NewToDoForm from "./NewToDoForm";
function Header() {
  return (
    <header className="header">
      <h1>Todo App</h1>
      <NewToDoForm></NewToDoForm>
    </header>
  );
}

export default Header;
