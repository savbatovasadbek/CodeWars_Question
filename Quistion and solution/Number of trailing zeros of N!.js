/* 
Write a program that will calculate the number of trailing zeros in a factorial of a given number.

N! = 1 * 2 * 3 *  ... * N

Be careful 1000! has 2568 digits...

For more info, see: http://mathworld.wolfram.com/Factorial.html

Examples
zeros(6) = 1
# 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

zeros(12) = 2
# 12! = 479001600 --> 2 trailing zeros
Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros.
*/

function zeros(n) {
  let numberTwo = 0;
  let numberFive = 0;
  for (let i = 1; i <= n; i++) {
    let numForTwo = i;
    let numForFive = i;
    while (numForTwo % 2 == 0) {
      numberTwo++;
      numForTwo /= 2;
    }
    while (numForFive % 5 == 0) {
      numberFive++;
      numForFive /= 5;
    }
  }

  return Math.min(numberTwo, numberFive);
}

console.log(zeros(1000000000));

// =========== Best solution ===============
// #1
// function zeros(n) {
//   if (n < 0) return -1;
//   let count = 0;
//   for (let i = 5; Math.floor(n / i) >= 1; i *= 5) count += Math.floor(n / i);
//   return count;
// }

// #2
// function zeros(n) {
//   return n / 5 < 1 ? 0 : Math.floor(n / 5) + zeros(n / 5);
// }
