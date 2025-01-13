import React, { useState } from "react";

const Todo = () => {
  const [taskList, setTaskList] = useState([
    "clean the floor", 
    "blah blah", 
    "sacar al perro"
  ]);
  const [inputValue, setInputValue] = useState("");
  const [warning, setWarning] = useState(false);  // Para mostrar advertencia si el campo está vacío

  // Handle submit: agrega una tarea a la lista y reinicia el input
  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() !== "") {
      setTaskList([...taskList, inputValue]);
      setInputValue("");
      setWarning(false);  // Resetea el aviso cuando se agrega una tarea
    } else {
      setWarning(true);  // Muestra un aviso si el input está vacío
    }
  };

  // Eliminar tarea de la lista
  const deleteTask = (index) => {
    setTaskList(taskList.filter((_, i) => i !== index));
  };

  return (
    <div className="container d-flex flex-column">
      <div className="text-center">
        <h1>ToDo's List</h1>
      </div>

      {/* Formulario para agregar tarea */}
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          type="text"
          placeholder="No tasks, add a task"
          className="form-control mb-3"
        />
        {warning && <p className="text-danger">Please enter a task.</p>} {/* Mensaje de advertencia */}

        {/* Lista de tareas */}
        <ul className="list-group">
          {taskList.map((task, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between">
              <span>{task}</span>
              <button
                type="button"
                className="btn-close"
                onClick={() => deleteTask(index)}
              ></button>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default Todo;