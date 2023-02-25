import read from "../db/read.js"
import write from "../db/write.js"
import exitWithError from "../utils/exitWithError.js"
import printTodo from "../utils/printTodo.js"

const add = async (description) => {
  if (!description) {
    exitWithError("Missing DESCRIPTION.", 2)
  }

  const db = await read()
  const lastId = db.lastId + 1
  const todo = {
    id: lastId,
    description,
    done: false,
  }

  await write(db, {
    lastId,
    todos: {
      [lastId]: todo,
    },
  })
  printTodo(todo)
}

export default add
