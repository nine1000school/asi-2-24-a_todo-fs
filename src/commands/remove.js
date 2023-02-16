import { EXIT_INVALID_ARGUMENT } from "../constants.js"
import read from "../db/read.js"
import write from "../db/write.js"
import exitWithError from "../utils/exitWithError.js"
import printTodo from "../utils/printTodo.js"

const remove = ([todoId]) => {
  const db = read()
  const {
    todos: { [todoId]: todo },
  } = db

  if (!todo) {
    exitWithError(`No such todo for ID #${todoId}`, EXIT_INVALID_ARGUMENT)
  }

  write(db, {
    todos: {
      [todoId]: undefined,
    },
  })
  printTodo(todo)
}

export default remove
