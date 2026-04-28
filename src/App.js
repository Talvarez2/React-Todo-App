import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/layouts/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';

let nextId = 1;

function App() {
  const [todos, setTodos] = useState([]);

  const markComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const delTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const addTodo = (title) => {
    setTodos([...todos, { id: nextId++, title, completed: false }]);
  };

  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Route exact path="/" render={() => (
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} markComplete={markComplete} delTodo={delTodo} />
            </>
          )} />
          <Route path="/about" component={About} />
        </div>
      </div>
    </Router>
  );
}

export default App;
