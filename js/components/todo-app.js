export default class TodoApp {
  constructor({ element }) {
    this._element = element;

    console.log(this._element);

    this._render();
  }

  _render() {
    this._element.innerHTML = `
      <input data-element="new-item-text"/>
      <button data-element="add-item-button">Add todo</button>
  
      <ul data-element="items-list">
        <li data-element="item">
          <input type="checkbox" data-element="item-checkbox" checked>
          <span data-element="item-text">wqerqwer</span>
        </li>
      </ul>
    `;
  }
}
