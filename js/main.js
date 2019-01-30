import TodoApp from './components/todo-app.js';

let config = {
  element: document.querySelector('[data-component="todo-app"]'),

  items: [
    { id: 1, checked: false, text: 'eqweqweqwe' },
    { id: 2, checked: false, text: 'eqweqweqwe' },
    { id: 3, checked: true, text: 'eqweqweqwe' },
    { id: 4, checked: false, text: 'eqweqweqwe' },
  ],
};

let todoApp = new TodoApp(config);
