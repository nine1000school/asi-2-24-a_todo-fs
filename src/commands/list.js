import read from "../db/read.js"
import printTodo from "../utils/printTodo.js"

const list = () => {
  const db = read()

  Object.values(db.todos).forEach(printTodo)
}

export default list
