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
  constructor({ element, items }) {
    super({ element });

    this._items = items;
    this._lastCreatedItemId = 4;

    this._render();

    this.on('click', 'add-item-button', (event) => {
      let input = this.findElement('new-item-text');

      this._addItem(input.value);
    });

    this.on('change', 'item-checkbox', (event) => {
      let itemElement = event.target.closest('[data-element="item"]');
      let currentItemId = +itemElement.dataset.itemId;
      let currentItem = this._items.find(item => item.id === currentItemId);

      currentItem.checked = !currentItem.checked;

      this._render();
    });
  }

  _addItem(text) {
    this._items.push({
      id: this._lastCreatedItemId,
      checked: false,
      text: text,
    });

    this._render();
  }



  _getItemHtml(item) {
    return `
      <li data-element="item" data-item-id="${ item.id }">
        <input
          type="checkbox"
          data-element="item-checkbox"
          ${ item.checked ? 'checked' : '' }
        >
        <span data-element="item-text">${ item.text }</span>
      </li>
    `;
  }

  _render() {
    const notCheckedItems = this._items.filter(item => !item.checked);

    this._element.innerHTML = `
      <div class="todo-app">
        <h3>
          <span data-element="items-count">${ notCheckedItems.length }</span>
          items left
        </h3>
        <input data-element="new-item-text"/>
        <button data-element="add-item-button">Add todo</button>

        <ul data-element="items-list">
          ${ this._items.map(item => 
      
            this._getItemHtml(item)
      
          ).join('') }
        </ul>
        
        <button>All</button>
        <button>Completed</button>
        <button>Not completed</button>
        
      </div>
    `;
  }
}
