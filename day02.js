import fs from "fs/promises";

async function get(filePath) {
  const data = await fs.readFile(filePath, "utf-8");
  const dataArr = data.split("\n");
  return dataArr;
}

const data = await get("day02Data.txt");

data.forEach((line) => {
  console.log(line);
});

let validCount = 0;

data.forEach((line) => {
  const [policy, letterWithColon, password] = line.split(" ");
  const letter = letterWithColon[0];
  const [min, max] = policy.split("-").map(Number);
  const letterCount = password
    .split("")
    .filter((char) => char === letter).length;

  if (letterCount >= min && letterCount <= max) {
    validCount++;
  }
});

console.log("Part 1 - Valid passwords count:", validCount);

validCount = 0;

data.forEach((line) => {
  const [policy, letterWithColon, password] = line.split(" ");
  const letter = letterWithColon[0];
  const [pos1, pos2] = policy.split("-").map((num) => Number(num) - 1);
  const isValid = (password[pos1] === letter) !== (password[pos2] === letter);
  if (isValid) {
    validCount++;
  }
});

console.log("Part 2 - Valid passwords count:", validCount);
