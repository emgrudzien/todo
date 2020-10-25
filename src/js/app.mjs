import { generateUI, generateTodoUI } from "./helpers.mjs";

export const action = (input, list) => {

  const taskName = input.value
  input.value = ""
  const todo = generateTodoUI(taskName)
  list.appendChild(todo)
}

export const deleteTodo = (todoListItem) => {
  todoListItem.remove()
}

export const changeStatus = (todoListItem, checkbox) => {
todoListItem.classList.add("done")
if (checkbox.checked !== true){
todoListItem.classList.remove("done")
}
// console.log(checkbox.checked)
}

const dashboard = generateUI()

document.body.appendChild(dashboard) 






