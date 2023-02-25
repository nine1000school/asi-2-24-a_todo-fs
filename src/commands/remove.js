import read from "../db/read.js"
import write from "../db/write.js"
import printTodo from "../utils/printTodo.js"

const remove = async (todoIds) => {
  const ids = todoIds.map((x) => Number.parseInt(x, 10))
  const db = await read()
  const todos = Object.fromEntries(
    Object.entries(db.todos).map(([id, todo]) => {
      if (ids.includes(todo.id)) {
        printTodo(todo)

        return [id]
      }

      return [id, todo]
    })
  )

  await write(db, { todos })
}

export default remove
