import './style.css';
import createElement from './utilities/CreateElement';
import { DocumentEvent } from './utilities/DocumentEvents';
import { getItemsFromStorage, saveItemsToStorage } from './utilities/Storage';
import { SelectElemtFromDOM } from './utilities/variables';
import Data from './utilities/todoData';

saveItemsToStorage('todos', Data);

DocumentEvent('DOMContentLoaded', () => {
  const todos = getItemsFromStorage('todos');
  const TodoContainer = SelectElemtFromDOM('.todos');

  todos.forEach((todosItem) => {
    let checkBox;
    if (todosItem.completed) {
      checkBox = 'checked';
    } else {
      checkBox = null;
    }
    const todo = createElement('div', 'todo', null, null, `
    <input type="checkbox" name="completed" id="completed" ${checkBox}>
    <p class="discription">Get enough money</p>
    <i class="fas fa-ellipsis-v"></i>
    `);
    todo.classList.add('todo');
    TodoContainer.appendChild(todo);
  });
});