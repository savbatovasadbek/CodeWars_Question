/*
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8
*/
// ---- My solution ------>
function rowSumOddNumbers(n) {
  let number = n === 1 ? 1 : 2;
  let sum = 0;
  if (n == 1) return 1;
  if (n > 2) {
    number = ((n - 1) * n) / 2 + 1;
  }
  for (let i = number; i < number + n; i++) {
    sum += i * 2 - 1;
  }
  return sum;
}

const { log } = console;
log(rowSumOddNumbers(3));

// ----- Best practice --------->
// #1
// function rowSumOddNumbers(n) {
//   return Math.pow(n, 3);
// }

// #2
// let rowSumOddNumbers = (n) => n ** 3;
