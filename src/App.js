import React from "react";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import { ToDoProvider } from "./Context/ToDoContext";
function App() {
  return (
    <ToDoProvider>
      <section className="todoapp">
        <Header></Header>
        <Content></Content>
      </section>
      <Footer></Footer>
    </ToDoProvider>
  );
}

export default App;
