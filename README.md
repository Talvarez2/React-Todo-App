# React Todo App

A simple, client-side todo list application built with [React](https://reactjs.org/) and [React Router](https://reactrouter.com/).

**[Live Demo](https://talvarez2.github.io/React-Todo-App/)**

## Features

- Add, complete, and delete todos
- Client-side routing with Home and About pages
- Accessible UI with ARIA labels and semantic HTML
- Empty state messaging when no todos exist

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v12+)
- [Yarn](https://yarnpkg.com/) or npm

### Install & Run

```bash
yarn install
yarn start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Test

```bash
yarn test
```

### Build for Production

```bash
yarn build
```

### Deploy to GitHub Pages

```bash
yarn deploy
```

## Project Structure

```
src/
├── App.js                        # Root component with routing and state
├── App.test.js                   # Smoke test
├── index.js                      # Entry point
├── components/
│   ├── AddTodo.js                # Form to add new todos
│   ├── TodoItem.js               # Single todo with checkbox and delete
│   ├── Todos.js                  # Todo list container
│   ├── layouts/
│   │   └── Header.js             # App header with navigation
│   └── pages/
│       └── About.js              # About page
public/
└── index.html                    # HTML template
```

## Architecture

State lives in `App` and flows down via props — no global state management.

```
App (state: todos[], nextId ref)
├── Header (nav links)
├── AddTodo (form → addTodo callback)
└── Todos (list, with empty state)
    └── TodoItem × N (checkbox + delete button)
```

## Tech Stack

- React 16 (functional components with hooks)
- React Router v5
- PropTypes for runtime type checking
- Create React App toolchain

## License

This project is for educational purposes.
