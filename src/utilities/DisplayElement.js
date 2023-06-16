import SelectElemtFromDOM from "./variables";
import createElement from './CreateElement';
import todos from "./todoData";

const DisplayTodoListOnDOM = () =>{
  const TodoContainer = SelectElemtFromDOM('.todos');
  TodoContainer.innerHTML = '';
  
  todos.forEach((todosItem) => {
    let checkBox;
    if (todosItem.completed) {
      checkBox = 'checked';
    } else {
      checkBox = null;
    }
    const todo = createElement('div', 'todo', null, null, `
    <input type="checkbox" name="completed" id="completed" ${checkBox}>
    <p class="discription">${todosItem.description}</p>
    <i class="fas fa-ellipsis-v"></i>
    `);
    todo.classList.add('todo');
    TodoContainer.appendChild(todo);
  });
}

export default DisplayTodoListOnDOM