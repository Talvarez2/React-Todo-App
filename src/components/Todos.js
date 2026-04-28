import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

function Todos({ todos, markComplete, delTodo }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }} aria-label="Todo list">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} markComplete={markComplete} delTodo={delTodo} />
      ))}
    </ul>
  );
}

Todos.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  })).isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

export default Todos;
