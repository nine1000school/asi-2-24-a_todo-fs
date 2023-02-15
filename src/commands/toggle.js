import { EXIT_INVALID_ARGUMENT } from "../constants.js"
import read from "../db/read.js"
import write from "../db/write.js"
import exitWithError from "../utils/exitWithError.js"
import printTodo from "../utils/printTodo.js"

const toggle = ([todoId]) => {
  const db = read()
  const {
    lastId,
    todos: { [todoId]: todo, ...todos },
  } = db

  if (!todo) {
    exitWithError(`No such todo for ID #${todoId}`, EXIT_INVALID_ARGUMENT)
  }

  const updatedTodo = {
    ...todo,
    done: !todo.done,
  }
  const updatedTodos = structuredClone(todos)
  updatedTodos[todoId] = updatedTodo

  write({
    lastId,
    todos: updatedTodos,
  })

  printTodo(updatedTodo)
}

export default toggle
