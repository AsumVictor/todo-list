import { saveItemsToStorage, getItemsFromStorage } from './Storage';


export const updateCompleteStatus = (index) => {
    const todos = getItemsFromStorage('todos');
  
    todos[index] = {
      ...todos[index],
      completed: !todos[index].completed,
    };
  
    saveItemsToStorage('todos', todos);
  };