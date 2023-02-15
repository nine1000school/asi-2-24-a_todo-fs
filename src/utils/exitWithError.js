import { EXIT_INVALID_COMMAND } from "../constants.js"

const exitWithError = (
  message = "Something went wrong.",
  code = EXIT_INVALID_COMMAND
) => {
  console.error(`Error: ${message}`)

  process.exit(code)
}

export default exitWithError
