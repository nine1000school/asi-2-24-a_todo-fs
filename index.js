import { accessSync, constants, readFileSync, writeFileSync } from "node:fs";
import { basename, resolve } from "node:path";
import process from "node:process";

const BYTE_SIZE = 256;
const [rotInput, ...filenames] = process.argv.slice(2);

if (!filenames.length) {
  console.error("Error: no file provided");

  process.exit(1);
}

const erroneousFiles = filenames.filter((filename) => {
  try {
    accessSync(filename, constants.R_OK);

    return false;
  } catch (err) {
    return true;
  }
});

if (erroneousFiles.length) {
  console.error(
    "Error: can't read following files\n-",
    erroneousFiles.join("\n- ")
  );

  process.exit(2);
}

const rot = Number.parseInt(rotInput, 10);

if (Number.isNaN(rot)) {
  console.error("Error: invalid rotation value.");

  process.exit(3);
}

const buffers = filenames.map((file) => readFileSync(file));

buffers.forEach((buf, index) => {
  const rotBuf = Buffer.from([...buf].map((byte) => byte + (rot % BYTE_SIZE)));
  const exportFilename = basename(filenames[index]);

  writeFileSync(resolve("exports", exportFilename), rotBuf, {
    encoding: "binary",
  });
});
