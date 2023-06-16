import { saveItemsToStorage, removeItemsToStorage } from "./Storage"
import DisplayTodoListOnDOM from "./DisplayElement"
import todos from "./todoData"
import SelectElementFromDOM from "./variables"

// Add new todo list
const saveTodo = (arrayItem)=> {
  let listTodo =  arrayItem.map((todo, index)=>{
        return {...todo, index: index+1}
    })

    return listTodo
}

export const addTodo = () =>{
let input = SelectElementFromDOM('input')
  let newTodo = {
    description: input.value,
    completed: false
  }

  if(input.value.trim() === ''){
    alert('Field cannot be empty')
    return
  }

  todos.push(newTodo)
  let orderedTodo = saveTodo(todos)
  saveItemsToStorage('todos', orderedTodo)
  DisplayTodoListOnDOM()
  input.value = ''
}

// Remove todo list
export const removeTodo = (index) =>{
    let newList = todos.filter(todo => todos.indexOf(todo) !== index)
     let orderedList = saveTodo(newList)
    saveItemsToStorage('todos', orderedList)
        DisplayTodoListOnDOM()
       }