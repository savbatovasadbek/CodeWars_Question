// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function alphabetPosition(text) {
  const a = [...text];
  const result = [];
  for (let i = 0; i < a.length; i++) {
    let sign = a[i].charCodeAt();
    if (65 <= sign && 90 >= sign) {
      sign -= 64;
      result.push(sign);
    } else if (97 <= sign && 122 >= sign) {
      sign -= 96;
      result.push(sign);
    }
  }
  const finish = result.join(" ");
  return finish;
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
// ------------------------------------>

// Best pructise
// #1
// function digital_root(n) {
//   return ((n - 1) % 9) + 1;
// }

// #2
// function digital_root(n) {
//   if (n < 10) return n;

//   return digital_root(
//     n
//       .toString()
//       .split("")
//       .reduce(function (acc, d) {
//         return acc + +d;
//       }, 0)
//   );
// }

// #3
// function digital_root(n) {
//   let finalSum = 10,
//     tempSum = 0;
//   while (finalSum > 9) {
//     while (n > 9) {
//       tempSum += n % 10;
//       n = parseInt(n / 10);
//     }
//     tempSum += n;
//     finalSum = tempSum;
//     n = finalSum;
//     tempSum = 0;
//   }
//   return finalSum;
// }

// #4
// function digital_root(n) {
//   var s = 0;
//   while (n) {
//     s += n % 10;
//     n = Math.floor(n / 10);
//   }
//   return s < 10 ? s : digital_root(s);
// }

// #5
// function digital_root(n) {
//   while (n.toString().length != 1) {
//     n = eval(n.toString().replace(/(\d)(?=\d)/g, '$1+'));
//   }
//   return n;
// }