import './App.css';
import {useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [temp, setTemp] = useState("");
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrUpdate();
  }

  const addOrUpdate = () => {
    const name = temp.trim();

    if (!name) return;

     if (editId) {
      setTodos((t) => 
        (t.map(todo => (todo.id === editId ? {...todo, name} : todo)))
      );
      setEditId(null);
     } else {
      const todoData = {
      id: Date.now(),
      name,
      done: false,
     }
      setTodos((t) => [...t, todoData]);
     }
     setTemp("");
     
  }

  const editTodo = (id) => {
    const t = todos.find((td) => td.id === id);
    setTemp(t.name);
    setEditId(id);
  }  
  
  const deleteTodo = (id) => {
    setTodos((t) => t.filter((td) => td.id !== id));
    if (editId === id) {
      setEditId(null);
      setTemp("");
    }
  }  

  const toggleDone = (id) => {
    setTodos((t) => (
      t.map((todo) => todo.id === id ? {...todo, done: !todo.done} : todo)
    ));
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={temp}
          onChange={(e) => setTemp(e.target.value)}
        />
        <button type="submit">Add / Update</button>
      </form>
      <h1>Todo Table</h1>
      {todos.map((todo) => (
        <div key={todo.id} className="todo">
          <h2 onClick={() => toggleDone(todo.id)}  style= {{textDecoration: todo.done ? "line-through" : "none"}}>{todo.name}</h2>
          <button onClick={() => editTodo(todo.id)}>Edit</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;