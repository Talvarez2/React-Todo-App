# AGENTS.md

## Project Overview

React Todo App — a client-side todo list built with React 16 and React Router v5. No backend; all state is in-memory.

## Quick Start

```bash
yarn install
yarn start    # dev server on http://localhost:3000
yarn test     # run tests
yarn build    # production build
yarn deploy   # deploy to GitHub Pages
```

## Key Files

| File | Purpose |
|------|---------|
| `src/App.js` | Root component — holds todo state, defines add/complete/delete handlers, sets up routing |
| `src/components/AddTodo.js` | Controlled form for adding new todos |
| `src/components/Todos.js` | Renders the list of `TodoItem` components |
| `src/components/TodoItem.js` | Single todo row — checkbox to toggle, button to delete |
| `src/components/layouts/Header.js` | App header with nav links (Home, About) |
| `src/components/pages/About.js` | Static About page |
| `src/index.js` | Entry point — renders `<App />` into the DOM |
| `public/index.html` | HTML template |

## Coding Conventions

- **Functional components with hooks** — no class components
- **PropTypes** on every component that receives props (use `.shape()` for objects, `.arrayOf()` for arrays)
- **Immutable state updates** — always spread/filter, never mutate state directly
- **`useCallback`** for handlers passed as props to prevent unnecessary re-renders
- **Functional updater form** (`setTodos(prev => ...)`) to avoid stale closure bugs
- **Accessibility** — use semantic HTML (`<nav>`, `<ul>`, `<li>`, `<label>`), ARIA labels on interactive elements
- **No inline `bind()`** — use arrow functions or callbacks
- **Short fragment syntax** (`<>...</>`) over `React.Fragment`

## Architecture

```
App (state: todos[])
├── Header (nav links)
├── AddTodo (form → addTodo callback)
└── Todos (list)
    └── TodoItem × N (checkbox + delete button)
```

State lives in `App` and flows down via props. There is no global state management.

## Testing

Uses Create React App's built-in Jest setup. Run `yarn test` for watch mode.
