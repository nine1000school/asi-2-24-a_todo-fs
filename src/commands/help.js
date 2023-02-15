const help = () => {
  console.error(`Usage:
    help                            shows this message
    add DESCRIPTION                 adds a new todo
    list                            lists all todos
    remove TODO_ID                  removes a todo of given ID
    toggle TODO_ID                  changes done status of given ID
    edit TODO_ID DESCRIPTION        changes description of given ID
`)
}

export default help
