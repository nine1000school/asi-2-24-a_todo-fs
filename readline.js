import { stdin, stdout } from "node:process"
import { createInterface } from "node:readline/promises"

const readline = createInterface({
  input: stdin,
  output: stdout,
})

const ask = async (question) => {
  const result = await readline.question(question)

  return result
}

const answer = await ask("What is your name? ")

console.log(`Your name is ${answer}.`)

readline.close()
