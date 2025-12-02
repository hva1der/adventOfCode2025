/* Finds number of times dial reaches zero, by incrementing or decrementing by 1
and checking the new result */

import { numbers } from "./numbers.js";

const numArray = numbers.split("\n");

let dial = 50;
let clickCounter = 0;

for (let i = 0; i < numArray.length; i++) {
  let currentSelection = numArray[i];
  let currentWholeNum = +currentSelection.slice(1); // separate out whole number

  if (currentSelection.charAt(0) === "L") {
    // turning dial left => reducing counter
    for (let i = 0; i < currentWholeNum; i++) {
      dial = dial === 0 ? 99 : dial - 1; // ensure dial value resets to 99 after decrementing past zero
      if (dial === 0) {
        clickCounter++;
        dial = 100;
      }
    }
  } else if (currentSelection.charAt(0) === "R") {
    // turning dial right => incrementing counter
    for (let i = 0; i < currentWholeNum; i++) {
      dial = dial === 100 ? 1 : dial + 1; // ensure dial value resets to 1 when it increments past 100
      if (dial === 100) {
        clickCounter++;
        dial = 0;
      }
    }
  } else {
    console.error("left/right char is not L or R");
    break;
  }
}

// result
console.log(clickCounter);
