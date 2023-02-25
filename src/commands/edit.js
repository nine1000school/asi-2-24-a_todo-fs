import { EXIT_INVALID_ARGUMENT } from "../constants.js"
import read from "../db/read.js"
import write from "../db/write.js"
import exitWithError from "../utils/exitWithError.js"
import printTodo from "../utils/printTodo.js"

const edit = async (todoId, description) => {
  if (!description) {
    exitWithError(`Invalid argument description`, EXIT_INVALID_ARGUMENT)
  }

  const db = await read()
  const {
    lastId,
    todos: { [todoId]: todo },
  } = db

  if (!todo) {
    exitWithError(`No such todo for ID #${todoId}`, EXIT_INVALID_ARGUMENT)
  }

  const updatedTodo = {
    ...todo,
    description,
  }

  await write({
    lastId,
    todos: {
      [todoId]: updatedTodo,
    },
  })

  printTodo(updatedTodo)
}

export default edit
