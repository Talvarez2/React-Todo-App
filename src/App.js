import React from 'react';
import Todos from './components/Todos';
import Header from './components/layouts/Header';
import AddTodo from './components/AddTodo';
import './App.css';

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Have Dinner',
        completed: false
      },
      {
        id: 3,
        title: 'Complete Tutorial',
        completed: false
      }
    ]
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map( todo => {
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;

    }) });
  }

  //delete Todo
  delTodo = (id) => {
    this.setState({ todos: 
      [...this.state.todos.filter(todo => 
        todo.id !== id)] });
  }

  // adding items to the Todo list
  addTodo = (title) => {
    const newTodo = {
      id: 4,
      title,
      completed: false
    }
    this.setState({ todos:
      [...this.state.todos, newTodo]
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo = { this.addTodo } />
          <Todos todos={this.state.todos} markComplete = 
          {this.markComplete} delTodo = {this.delTodo} />
        </div>
      </div>
    );
  }
}

export default App;
