import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/layouts/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';

let nextId = 1;

function App() {
  const [todos, setTodos] = useState([]);

  const markComplete = useCallback((id) => {
    setTodos(prev => prev.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  }, []);

  const delTodo = useCallback((id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }, []);

  const addTodo = useCallback((title) => {
    setTodos(prev => [...prev, { id: nextId++, title, completed: false }]);
  }, []);

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
