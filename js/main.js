import TodoApp from './components/todo-app.js';

let config = {
  element: document.querySelector('[data-component="todo-app"]')
};

let todoApp = new TodoApp(config);
