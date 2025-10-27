import fs from "fs/promises";

async function get(filePath) {
  const data = await fs.readFile(filePath, "utf-8");
  const numbersArr = data.split("\n").map(Number);
  return numbersArr;
}

const numbers = await get("day01Data.txt");

let count = 0;

numbers.forEach((number1) => {
  numbers.forEach((number2) => {
    if (number1 + number2 === 2020) {
      console.log("Part " + count, number1 * number2);
      count++;
    }
  });
});

console.log("-----");

count = 0;

numbers.forEach((number1) => {
  numbers.forEach((number2) => {
    numbers.forEach((number3) => {
      if (number1 + number2 + number3 === 2020) {
        console.log("Part " + count, number1 * number2 * number3);
        count++;
      }
    });
  });
});
