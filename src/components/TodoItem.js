import React from 'react';
import PropTypes from 'prop-types';

function TodoItem({ todo, markComplete, delTodo }) {
  const { id, title, completed } = todo;

  const style = {
    background: '#f4f4f4',
    padding: '10px',
    borderBottom: '1px #ccc dotted',
    textDecoration: completed ? 'line-through' : 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  };

  return (
    <li style={style}>
      <label style={{ flex: 1, cursor: 'pointer' }}>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => markComplete(id)}
          aria-label={`Mark "${title}" as ${completed ? 'incomplete' : 'complete'}`}
        />{' '}
        {title}
      </label>
      <button
        onClick={() => delTodo(id)}
        style={btnStyle}
        aria-label={`Delete "${title}"`}
      >
        ✕
      </button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '2px 8px',
  borderRadius: '50%',
  cursor: 'pointer',
  fontSize: '12px'
};

export default TodoItem;
