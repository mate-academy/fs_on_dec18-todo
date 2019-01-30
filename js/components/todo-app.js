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

  findElement(elementName) {
    return this._element.querySelector(`[data-element="${elementName}"]`);
  }
}


export default class TodoApp extends Component {
  constructor({ element }) {
    super({ element });

    this._numberOfItems = 0;

    this._render();

    this.on('click', 'add-item-button', (event) => {
      let input = this.findElement('new-item-text');
      let list = this.findElement('items-list');

      list.insertAdjacentHTML('beforeend', this._getItemHtml(input.value));
      input.value = '';

      this._numberOfItems++;

      this.findElement('items-count').innerHTML = this._numberOfItems;
    });

    this.on('change', 'item-checkbox', (event) => {
      let checkbox = event.target;

      if (checkbox.checked) {
        this._numberOfItems--;
      } else {
        this._numberOfItems++;
      }

      this.findElement('items-count').innerHTML = this._numberOfItems;
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
        <h3>
          <span data-element="items-count">${ this._numberOfItems }</span>
          items left
        </h3>
        <input data-element="new-item-text"/>
        <button data-element="add-item-button">Add todo</button>

        <ul data-element="items-list">

        </ul>
        
        <button>All</button>
        <button>Completed</button>
        <button>Not completed</button>
        
      </div>
    `;
  }
}
