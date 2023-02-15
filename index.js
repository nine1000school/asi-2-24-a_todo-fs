import process from "node:process";

const exitWithError = (message = "Something went wrong.", code = 1) => {
  console.error(`Error: ${message}`);

  process.exit(code);
};

const help = () => {
  console.error(`Usage:
    help              shows this message
    add DESCRIPTION   adds a new todo
    list              lists all todos
    remove TODO_ID    removes a todo of given ID
    toggle TODO_ID    changes done status of given ID
`);
};
const add = ([description]) => {
  if (!description) {
    exitWithError("Missing DESCRIPTION.", 2);
  }

  // .......
};
const commands = {
  add,
  // remove,
  // list,
  // toggle,
  help,
};

const [commandName, ...args] = process.argv.slice(2);
const command = commands[commandName];

if (!command) {
  exitWithError("Invalid command (see usage)");
}

command(args);
