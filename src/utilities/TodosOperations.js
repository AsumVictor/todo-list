import { saveItemsToStorage } from "./Storage"
import DisplayTodoListOnDOM from "./DisplayElement"
import todos from "./todoData"


export const addTodo = () =>{
    const index = todos.length + 1
  let newTodo = {
    index,
    description: 'Get enough money',
    completed: false
  }

  console.log(index)

  todos.push(newTodo)
  saveItemsToStorage('todos', todos)
  DisplayTodoListOnDOM()
}
