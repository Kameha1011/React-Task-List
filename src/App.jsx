import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { tasks as data } from "./tasks";
const App = () => {

  // useEffect en este caso como le pasamos como segundo parametro un array vacio añade la data de tasks.js después de montar el componente y no lo vuelve a hacer en todo el ciclo

  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        <TaskForm/>
        <TaskList/>
      </div>
      
    </main>
  );
};
export default App;
