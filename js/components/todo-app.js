class Component {
  constructor({ element }) {
    this._element = element;
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
}


export default class TodoApp extends Component {
  constructor({ element }) {
    super({ element });

    this._render();

    this.on('click', 'add-item-button', (event) => {
      let input = this._element.querySelector('[data-element="new-item-text"]');
      let list = this._element.querySelector('[data-element="items-list"]');

      list.insertAdjacentHTML('beforeEnd', this._getItemHtml(input.value));
    });
  }

  _getItemHtml(text) {
    return `
      <li data-element="item">
        <input type="checkbox" data-element="item-checkbox">
        <span data-element="item-text">${ text }</span>
      </li>
    `;
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
