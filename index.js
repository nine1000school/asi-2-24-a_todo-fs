import { readFileSync, writeFileSync } from "node:fs";
import process from "node:process";

const [firstName, lastName, age] = process.argv.slice(2);

if (!firstName || !lastName || !age) {
  console.error("Error: Missing argument.");

  process.exit(1);
}

const read = () => {
  try {
    const data = readFileSync("./db.json", { encoding: "utf-8" });

    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};
const write = (db) => {
  writeFileSync("./db.json", JSON.stringify(db), {
    encoding: "utf-8",
  });
};
const db = read();
const newDB = [
  ...db,
  {
    firstName,
    lastName,
    age,
  },
];

write(newDB);
