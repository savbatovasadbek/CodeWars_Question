/* 
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

function moveZeros(arr) {
  let zeroNUmbers = 0;
  const num = [];
  arr.forEach((el) => {
    if (el === 0) zeroNUmbers++;
    else num.push(el);
  });
  const result = num.concat(Array(zeroNUmbers).fill(0));
  return result;
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));

// -------- Best practice ------->
// #1
// var moveZeros = function (arr) {
//   return arr
//     .filter(function (x) {
//       return x !== 0;
//     })
//     .concat(
//       arr.filter(function (x) {
//         return x === 0;
//       })
//     );
// };

// #2
// const moveZeros = (arr) => [
//   ...arr.filter((n) => n !== 0),
//   ...arr.filter((n) => n === 0),
// ];
