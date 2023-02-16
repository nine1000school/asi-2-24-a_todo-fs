import process from "node:process"
import add from "./src/commands/add.js"
import edit from "./src/commands/edit.js"
import help from "./src/commands/help.js"
import list from "./src/commands/list.js"
import remove from "./src/commands/remove.js"
import toggle from "./src/commands/toggle.js"
import exitWithError from "./src/utils/exitWithError.js"

const commands = {
  add,
  remove,
  list,
  toggle,
  help,
  edit,
}

const [commandName, ...args] = process.argv.slice(2)
const command = commands[commandName]

if (!command) {
  exitWithError("Invalid command (see usage)")
}

command(args)
