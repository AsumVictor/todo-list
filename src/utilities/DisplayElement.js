import createElement from "./CreateElement";
import SelectElementFromDOM, {
  SelectMultipleElementsFromDOM,
} from "./variables";
import { addTodo, removeTodo } from "./TodosOperations";
import { elEvent } from "./DocumentEvents";
import { getItemsFromStorage } from "./Storage";

const DisplayTodoListOnDOM = () => {
  let todos;
  if (!getItemsFromStorage("todos")) {
    todos = [];
  } else {
    todos = getItemsFromStorage("todos");
  }

  const TodoContainer = SelectElementFromDOM(".todos");
  TodoContainer.innerHTML = "";

  todos.forEach((todosItem) => {
    let checkBox;
    if (todosItem.completed) {
      checkBox = "checked";
    } else {
      checkBox = null;
    }
    const todo = createElement(
      "div",
      "todo",
      null,
      null,
      `
    <input type="checkbox" name="completed" class='checkbox' id="completed${todosItem.index}" ${checkBox}>
    <label for='completed${todosItem.index}' class="discription">${todosItem.description}</label>
    <i class="fa fa-trash delete" aria-hidden="true"></i>
    `
    );
    todo.classList.add("todo");
    TodoContainer.appendChild(todo);
  });

  const addTodoBtn = SelectElementFromDOM(".add-todo-btn");
  const input = SelectElementFromDOM("input");
  const deleIcons = SelectMultipleElementsFromDOM(".delete");
  const checkboxs = SelectMultipleElementsFromDOM(".checkbox");
  elEvent(addTodoBtn, "click", addTodo);
  elEvent(input, "keypress", (event) => {
    // if key is equall to enter
    if (event.key === "Enter") {
      event.preventDefault();
      addTodo();
    }
  });

  deleIcons.forEach((deleIcon, index) => {
    elEvent(deleIcon, "click", () => {
      removeTodo(index);
    });
  });

  checkboxs.forEach((checkbox, index) => {
    elEvent(checkbox, "click", () => {
      console.log(index);
    });
  });
};

export default DisplayTodoListOnDOM;
