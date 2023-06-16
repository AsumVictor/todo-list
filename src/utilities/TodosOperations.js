import { saveItemsToStorage } from "./Storage"
import DisplayTodoListOnDOM from "./DisplayElement"
import todos from "./todoData"
import SelectElemtFromDOM from "./variables"

export const addTodo = () =>{
    const index = todos.length + 1
let input = SelectElemtFromDOM('input')
  let newTodo = {
    index,
    description: input.value,
    completed: false
  }

  if(input.value.trim() === ''){
    alert('Field cannot be empty')
    return
  }

  todos.push(newTodo)
  saveItemsToStorage('todos', todos)
  DisplayTodoListOnDOM()
  input.value = ''
}
