import { sign } from "crypto";
import fs from "fs/promises";

async function get(filePath) {
  const data = await fs.readFile(filePath, "utf-8");
  const numbersArr = data.split("\n").map(Number);
  return numbersArr;
}

const signs = await get("day01Data.txt");

let countRight = 0;
let countDown = 0;

let treeCount = 0;

const linesArr = signs.map((line) => line.toString());

while (countDown < linesArr.length) {
    const line = linesArr[countDown];
    if (line[countRight % line.length] === "#") {
        treeCount++;
    }
    countRight += 3;
    countDown++;
};