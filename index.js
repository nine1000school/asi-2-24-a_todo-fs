import { Command } from "commander"
import add from "./src/commands/add.js"
import edit from "./src/commands/edit.js"
import list from "./src/commands/list.js"
import remove from "./src/commands/remove.js"
import toggle from "./src/commands/toggle.js"

const program = new Command()

program.name("todo").description("A simple CLI todo list")

program
  .command("add")
  .alias("a")
  .description("adds a new todo")
  .argument("<description>", "Description", (description) => description.trim())
  .action(add)

program
  .command("remove")
  .alias("r")
  .description("removes a new todo for given ID")
  .argument("<id...>", "Todo ID")
  .action(remove)

program
  .command("list")
  .aliases(["l", "ls"])
  .description("list all todos")
  .option("-a, --all", "show all todos")
  .action(list)

program
  .command("toggle")
  .alias("x")
  .description("toggle done state of given todo")
  .argument("<id>", "Todo ID", (id) => Number.parseInt(id, 10))
  .action(toggle)

program
  .command("edit")
  .alias("e")
  .description("edit given todo")
  .argument("<id>", "Todo ID", (id) => Number.parseInt(id, 10))
  .argument("<description>", "Description", (description) => description.trim())
  .action(edit)

program.parse()
