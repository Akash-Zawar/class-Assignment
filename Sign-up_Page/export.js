import { exp2 as ex } from "./export2.js";

function addSum(...arr) {
  let p = arr;
  let sum = 0;
  for (let i = 0; i < p.length; i++) {
    sum += p[i];
  }
  return sum * ex;
}

function subtract(...arr) {
  let sub = 0;
  for (let i = 0; i < arr.length; i++) {
    sub -= arr[i];
  }
  return sub;
}

export { addSum, subtract };
console.log(addSum(1, 2, 3, 4));

export const p = "fix";
export let z = 5;
