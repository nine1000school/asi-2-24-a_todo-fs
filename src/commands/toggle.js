import { EXIT_INVALID_ARGUMENT } from "../constants.js"
import read from "../db/read.js"
import write from "../db/write.js"
import exitWithError from "../utils/exitWithError.js"
import printTodo from "../utils/printTodo.js"

const toggle = async (todoId) => {
  const db = await read()
  const {
    todos: { [todoId]: todo },
  } = db

  if (!todo) {
    exitWithError(`No such todo for ID #${todoId}`, EXIT_INVALID_ARGUMENT)
  }

  const updatedTodo = {
    ...todo,
    done: !todo.done,
  }

  await write(db, {
    todos: {
      [todoId]: updatedTodo,
    },
  })

  printTodo(updatedTodo)
}

export default toggle
