import { getItemsFromStorage } from "./Storage";
let todos;
if(!getItemsFromStorage('todos')){
  todos = []
}else {
  todos = getItemsFromStorage('todos');
}


export default todos