export default class TodoApp {
  constructor({ element }) {
    this._element = element;

    console.log(this._element);

    this._render();

    this.on('input', 'new-item-text', (event) => {});
    this.on('change', 'item-checkbox', (event) => {});
    this.on('click', 'add-item-button', (event) => {});
  }

  on(eventName, dataElementName, callback) {
    this._element.addEventListener(eventName, (event) => {
      let newItemTextElement = event.target.closest(
        `[data-element="${dataElementName}"]`
      );

      if (!newItemTextElement) {
        return;
      }

      callback(event);
    });
  }

  _render() {
    this._element.innerHTML = `
      <div class="todo-app">
        <input data-element="new-item-text"/>
        <button data-element="add-item-button">Add todo</button>
    
        <ul data-element="items-list">
          <li data-element="item">
            <input type="checkbox" data-element="item-checkbox" checked>
            <span data-element="item-text">wqerqwer</span>
          </li>
        </ul>
        
      </div>
    `;
  }
}
