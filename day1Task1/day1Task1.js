import { numbers } from "./numbers.js";

/* Finds number of times the dial stops on zero. Determines left/right rotation
direction and slices off last two digits to determine destination dial (
ignoring number of spins of the dial) */

const numArray = numbers.split("\n");

let code = 50;
let zeroCount = 0;

for (let i = 0; i < numArray.length; i++) {
  let currentSelection = numArray[i];
  let currentWholeNum = currentSelection.slice(1); // separate out whole number
  let currentNum = +currentWholeNum.slice(-2); // if num > 99, only last 2 digits are relevant (100 = 00 = treated as 0/no change to code/dial)
  if (currentSelection.charAt(0) === "L") {
    code = currentNum > code ? 100 - (currentNum - code) : code - currentNum;
  } else if (currentSelection.charAt(0) === "R") {
    code = code + currentNum > 99 ? code + currentNum - 100 : code + currentNum;
  } else {
    console.error("left/right char is not L or R");
    break;
  }
  if (code === 0) {
    zeroCount++;
  }
}

// result
console.log(zeroCount);
