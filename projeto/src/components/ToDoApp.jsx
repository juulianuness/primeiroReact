import { useState } from "react";
import './ToDoApp.css';

const ToDoApp = () => {
  const [todos, setTodos] = useState([]);

  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if(inputValue.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);

      setInputValue("");
    }

  };


  return (
    <div className="app-container">
      <h1 className="title">Lista de Tarefas</h1>

      <form onSubmit ={handleSubmit} className="form-container">
        <input type="text"
        className="input-field"
        placeholder="adicione uma tarefa..." 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className="add-button">
          Adicionar
        </button>

      </form>

      {todos.length === 0 && <p className="empty">Não Há Tarefas</p>}


      <ul className="todo-list">
        {todos.map((todos) => (
          <li key={todos.id} className="todos-item">
            {todos.text}

            

          </li>
        ))}
      </ul>


    </div>
  );
};

export default ToDoApp;


