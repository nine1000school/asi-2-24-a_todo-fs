import read from "../db/read.js"
import printTodo from "../utils/printTodo.js"

const list = async ({ all = false }) => {
  const db = await read()
  const todos = Object.values(db.todos)
  const filteredTodos = all ? todos : todos.filter(({ done }) => !done)

  filteredTodos.forEach(printTodo)
}

export default list
