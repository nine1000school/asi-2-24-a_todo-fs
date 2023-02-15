import { EXIT_INVALID_ARGUMENT } from "../constants.js"
import read from "../db/read.js"
import write from "../db/write.js"
import exitWithError from "../utils/exitWithError.js"
import printTodo from "../utils/printTodo.js"

const remove = ([todoId]) => {
  const db = read()
  const {
    lastId,
    todos: { [todoId]: todo, ...todos },
  } = db

  if (!todo) {
    exitWithError(`No such todo for ID #${todoId}`, EXIT_INVALID_ARGUMENT)
  }

  write({ lastId, todos })
  printTodo(todo)
}

export default remove
