/* 
Comparing Arrays in JavaScript – How to Compare 2 Arrays in JS
*/

// #1
// let array1 = [11, 22, 33];
// let array2 = [11, 22, 33];
// console.log(JSON.stringify(array1) === JSON.stringify(array2)); //true

// #2
// const compareArrays = (a, b) => {
//   return JSON.stringify(a) === JSON.stringify(b);
// };
// let array1 = [11, 22, 33];
// let array2 = [21, 22, 23];
// let array3 = [11, 22, 33];
// console.log(compareArrays(array1, array2)); //false
// console.log(compareArrays(array1, array3)); //true

// #3
// let array1 = [11, 22, 33];
// let array2 = [11, 22, 33];
// console.log(array1.toString() === array2.toString()); //true

// #4
// const compareArrays = (a, b) =>
//   a.length === b.length && a.every((element, index) => element === b[index]);
// let array1 = [11, null, 33];
// let array2 = [21, 22, 23];
// let array3 = [11, undefined, 33];
// console.log(compareArrays(array1, array2)); //false
// console.log(compareArrays(array1, array3)); //false
