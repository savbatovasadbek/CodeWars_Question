/* 
Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

Example:
"MM"      -> 2000
"MDCLXVI" -> 1666
"M"       -> 1000
"CD"      ->  400
"XC"      ->   90
"XL"      ->   40
"I"       ->    1

Help:
Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
Courtesy of rosettacode.org
*/

function solution(roman) {
  const r = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let bool = true;
  const number = [...roman]
    .map((el) => r[el])
    .reduce((acc, el, idx, arr) => {
      if (arr[idx + 1] && arr[idx + 1] > el) {
        acc += arr[idx + 1] - el;
        bool = false;
      } else if (bool) {
        acc += el;
      } else {
        bool = true;
      }
      return acc;
    }, 0);
  return number;
}

console.log(solution("MM"));
console.log(solution("MDCLXVI"));
console.log(solution("M"));
console.log(solution("CD"));
console.log(solution("XC"));
console.log(solution("XL"));
console.log(solution("MMMXCVII"));

// ----- Best practice ------->
// #1
// const solution = (roman) =>
//   [...roman]
//     .map((val) => ({ M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 }[val]))
//     .reduce((pre, val, idx, arr) => pre + (val < arr[++idx] ? -val : val), 0);
