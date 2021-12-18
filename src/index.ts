import { basename } from "path";

function acquireBaseName(): string {
  return basename(__filename);
}

console.log(`Hello world from ${acquireBaseName()}!`);
