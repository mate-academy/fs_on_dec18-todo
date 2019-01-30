import TodoApp from './components/todo-app.js';

let config = {
  element: document.querySelector('[data-component="todo-app"]'),

  items: [
    { checked: false, text: 'eqweqweqwe' },
    { checked: false, text: 'eqweqweqwe' },
    { checked: true, text: 'eqweqweqwe' },
    { checked: false, text: 'eqweqweqwe' },
  ],
};

let todoApp = new TodoApp(config);
