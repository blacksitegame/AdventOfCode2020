import { sign } from "crypto";
import fs from "fs/promises";

async function get(filePath) {
  const data = await fs.readFile(filePath, "utf-8");
  const charArr = data.split("\n");
  return charArr;
}

const signs = await get("day03Data.txt");

console.log(signs);

let countRight = 0;
let countDown = 0;

let treeCount = 0;

console.log(signs.length);

while (countDown < signs.length) {
    const line = signs[countDown].trim();
    if (line[countRight % line.length] === "#") {
        treeCount++;
    }
    countRight += 3;
    countDown++;
};

console.log("Part 1:", treeCount);