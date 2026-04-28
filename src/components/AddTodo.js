import React, { useState } from 'react';
import PropTypes from 'prop-types';

function AddTodo({ addTodo }) {
  const [title, setTitle] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTodo(title.trim());
    setTitle('');
  };

  return (
    <form onSubmit={onSubmit} style={{ display: 'flex' }} aria-label="Add a new todo">
      <label htmlFor="todo-input" style={{ position: 'absolute', left: '-9999px' }}>
        New todo
      </label>
      <input
        id="todo-input"
        type="text"
        value={title}
        style={{ flex: '10', padding: '5px' }}
        placeholder="Add Todo ..."
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="submit"
        value="Submit"
        className="btn"
        style={{ flex: '1' }}
      />
    </form>
  );
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default AddTodo;
