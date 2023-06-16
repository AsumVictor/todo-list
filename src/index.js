import './style.css';
import  DocumentEvent, { elEvent } from './utilities/DocumentEvents';
import DisplayTodoListOnDOM from './utilities/DisplayElement';
import SelectElemtFromDOM from './utilities/variables';
import { addTodo } from './utilities/TodosOperations';

DocumentEvent('DOMContentLoaded', () => {
    
    DisplayTodoListOnDOM()
    const addTodoBtn = SelectElemtFromDOM('.add-todo-btn')
    elEvent(addTodoBtn, 'click', addTodo)
});

