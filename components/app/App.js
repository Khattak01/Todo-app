import React from 'react';
import './App.css';
import Todo from '../todo/Todo';
import TodoForm from '../todoForm/TodoForm';


function App() {
  const [todos, setTodos] = React.useState([
    { 
      text: "Learn about React",
      isCompleted: false 
    },
    { 
      text: "Meet friend for lunch",
      isCompleted: false 
    },
    { 
      text: "Build cool todo app",
      isCompleted: false  
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>Simple Todo React App</h1>
      <h1>React version : {React.version}</h1>
      <div className="app__todo-list">
        {todos.map((item, index) => <Todo 
          key={index} 
          index={index} 
          completeTodo={completeTodo} 
          todos={[...todos]}
          removeTodo = {removeTodo}
        >
          {item.text}
        </Todo>)}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
