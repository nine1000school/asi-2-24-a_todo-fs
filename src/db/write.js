import { deepmerge } from "deepmerge-ts"
import { writeFileSync } from "fs"
import config from "../config.js"

const write = (db, data) => {
  writeFileSync(config.db.path, JSON.stringify(deepmerge(db, data)), {
    encoding: "utf-8",
  })
}

export default write
